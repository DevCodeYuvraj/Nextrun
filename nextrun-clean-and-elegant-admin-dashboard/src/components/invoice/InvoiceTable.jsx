"use client";

import {
  useMemo,
  useState,
} from "react";

import { MdSearch } from "react-icons/md";

import {
  invoices as initialInvoices,
} from "@/data/invoiceData";

import InvoiceRow from "./InvoiceRow";
import InvoicePagination from "./InvoicePagination";
import InvoiceDetailsModal from "./InvoiceDetailsModal";
import EditInvoiceModal from "./EditInvoiceModal";
import DeleteInvoiceModal from "./DeleteInvoiceModal";

import styles from "./InvoiceTable.module.css";

const ITEMS_PER_PAGE = 5;

export default function InvoiceTable() {
  const [invoices, setInvoices] =
    useState(initialInvoices);

  const [search, setSearch] =
    useState("");

  const [selectedIds, setSelectedIds] =
    useState([]);

  const [page, setPage] =
    useState(1);

  const [selectedInvoice, setSelectedInvoice] =
    useState(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const filteredInvoices = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    if (!query) {
      return invoices;
    }

    return invoices.filter((invoice) => {
      return (
        invoice.invoice
          .toLowerCase()
          .includes(query) ||
        invoice.customer
          .toLowerCase()
          .includes(query) ||
        invoice.date
          .toLowerCase()
          .includes(query) ||
        invoice.status
          .toLowerCase()
          .includes(query)
      );
    });
  }, [search, invoices]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredInvoices.length /
        ITEMS_PER_PAGE
    )
  );

  const currentPage = Math.min(
    page,
    totalPages
  );

  const paginatedInvoices =
    filteredInvoices.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,

      currentPage *
        ITEMS_PER_PAGE
    );

  const visibleIds =
    paginatedInvoices.map(
      (invoice) => invoice.id
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
            (item) => item !== id
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

  const handleView = (invoice) => {
    setSelectedInvoice(invoice);
    setDetailsOpen(true);
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setEditOpen(true);
  };

  const handleDelete = (invoice) => {
    setSelectedInvoice(invoice);
    setDeleteOpen(true);
  };

  const handleSaveEdit = (
    updatedInvoice
  ) => {
    setInvoices((previous) =>
      previous.map((invoice) =>
        invoice.id ===
        updatedInvoice.id
          ? updatedInvoice
          : invoice
      )
    );

    setSelectedInvoice(
      updatedInvoice
    );

    setEditOpen(false);
  };

  const handleConfirmDelete = (
    invoiceId
  ) => {
    setInvoices((previous) =>
      previous.filter(
        (invoice) =>
          invoice.id !== invoiceId
      )
    );

    setSelectedIds((previous) =>
      previous.filter(
        (id) => id !== invoiceId
      )
    );

    setDeleteOpen(false);
    setSelectedInvoice(null);
  };

  const handlePrint = (invoice) => {
    setSelectedInvoice(invoice);
    setDetailsOpen(true);

    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  return (
    <>
      <section className={styles.card}>
        <div className={styles.header}>
          <div>
            <h3>Latest Invoice</h3>

            <p>
              {selectedIds.length > 0
                ? `${selectedIds.length} selected`
                : "Manage your latest invoices"}
            </p>
          </div>

          <div
            className={
              styles.searchBox
            }
          >
            <MdSearch />

            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div
          className={
            styles.tableWrapper
          }
        >
          <table
            className={styles.table}
          >
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
                    aria-label="Select visible invoices"
                  />
                </th>

                <th>Invoice</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>

                <th
                  className={
                    styles.actionHeading
                  }
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedInvoices.length >
              0 ? (
                paginatedInvoices.map(
                  (invoice) => (
                    <InvoiceRow
                      key={invoice.id}
                      invoice={invoice}
                      selected={selectedIds.includes(
                        invoice.id
                      )}
                      onSelect={
                        handleSelect
                      }
                      onView={
                        handleView
                      }
                      onEdit={
                        handleEdit
                      }
                      onPrint={
                        handlePrint
                      }
                      onDelete={
                        handleDelete
                      }
                    />
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className={
                      styles.empty
                    }
                  >
                    No invoices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <InvoicePagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={
            filteredInvoices.length
          }
          itemsPerPage={
            ITEMS_PER_PAGE
          }
          onPageChange={setPage}
        />
      </section>

      <InvoiceDetailsModal
        open={detailsOpen}
        invoice={selectedInvoice}
        onClose={() =>
          setDetailsOpen(false)
        }
      />

      <EditInvoiceModal
        open={editOpen}
        invoice={selectedInvoice}
        onClose={() =>
          setEditOpen(false)
        }
        onSave={handleSaveEdit}
      />

      <DeleteInvoiceModal
        open={deleteOpen}
        invoice={selectedInvoice}
        onClose={() =>
          setDeleteOpen(false)
        }
        onConfirm={
          handleConfirmDelete
        }
      />
    </>
  );
}