"use client";

import { useMemo, useState } from "react";

import { initialTickets } from "@/data/ticketingData";

import TicketRow from "./TicketRow";
import TicketPagination from "./TicketPagination";

import styles from "./TicketTable.module.css";

const ITEMS_PER_PAGE = 5;

export default function TicketTable() {
  const [tickets] = useState(initialTickets);
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(tickets.length / ITEMS_PER_PAGE)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedTickets = useMemo(() => {
    const start =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return tickets.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [tickets, currentPage]);

  const visibleIds = paginatedTickets.map(
    (ticket) => ticket.id
  );

  const allVisibleSelected =
    visibleIds.length > 0 &&
    visibleIds.every((id) =>
      selectedIds.includes(id)
    );

  const handleSelect = (id) => {
    setSelectedIds((previous) =>
      previous.includes(id)
        ? previous.filter(
            (selectedId) =>
              selectedId !== id
          )
        : [...previous, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedIds((previous) => {
      if (allVisibleSelected) {
        return previous.filter(
          (id) =>
            !visibleIds.includes(id)
        );
      }

      return [
        ...new Set([
          ...previous,
          ...visibleIds,
        ]),
      ];
    });
  };

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h3>Latest Ticket Sold</h3>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th
                className={
                  styles.checkboxColumn
                }
              >
                <input
                  type="checkbox"
                  checked={
                    allVisibleSelected
                  }
                  onChange={
                    handleSelectAll
                  }
                  aria-label="Select visible tickets"
                />
              </th>

              <th>Event</th>
              <th>Contact</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedTickets.map(
              (ticket) => (
                <TicketRow
                  key={ticket.id}
                  ticket={ticket}
                  selected={selectedIds.includes(
                    ticket.id
                  )}
                  onSelect={
                    handleSelect
                  }
                />
              )
            )}
          </tbody>
        </table>
      </div>

      <TicketPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={tickets.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
    </section>
  );
}