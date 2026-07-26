"use client";

import { useCallback, useMemo, useState } from "react";

import { initialColumns } from "@/data/kanbanData";

import CardModal from "./CardModal";
import RenameColumnModal from "./RenameColumnModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import KanbanColumn from "./KanbanColumn";

import styles from "./KanbanBoard.module.css";

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [renameOpen, setRenameOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [columnToRename, setColumnToRename] = useState(null);
  const [columnToDelete, setColumnToDelete] = useState(null);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedCard(null);
    setSelectedColumn(null);
  }, []);

  const moveCard = useCallback((cardId, sourceId, destinationId) => {
    if (sourceId === destinationId) return;

    setColumns((previous) => {
      const next = structuredClone(previous);

      const source = next.find((c) => c.id === sourceId);
      const destination = next.find((c) => c.id === destinationId);

      if (!source || !destination) return previous;

      const index = source.cards.findIndex(
        (card) => card.id === cardId
      );

      if (index === -1) return previous;

      const [card] = source.cards.splice(index, 1);

      destination.cards.push(card);

      return next;
    });
  }, []);

  const handleDragStart = useCallback((event, cardId, sourceColumnId) => {
    event.dataTransfer.effectAllowed = "move";

    event.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        cardId,
        sourceColumnId,
      })
    );
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event, destinationColumnId) => {
      event.preventDefault();

      try {
        const payload = JSON.parse(
          event.dataTransfer.getData("application/json")
        );

        moveCard(
          payload.cardId,
          payload.sourceColumnId,
          destinationColumnId
        );
      } catch {}
    },
    [moveCard]
  );

  const handleAddCard = useCallback((columnId) => {
    setSelectedColumn(columnId);
    setModalMode("add");
    setModalOpen(true);
  }, []);

  const handleEditCard = useCallback((card) => {
    setSelectedCard(card);
    setModalMode("edit");
    setModalOpen(true);
  }, []);

  const handleDeleteCard = useCallback((cardId) => {
    setColumns((previous) =>
      previous.map((column) => ({
        ...column,
        cards: column.cards.filter(
          (card) => card.id !== cardId
        ),
      }))
    );
  }, []);

  const handleDuplicateCard = useCallback((card) => {
    setColumns((previous) =>
      previous.map((column) => {
        if (!column.cards.some((c) => c.id === card.id))
          return column;

        return {
          ...column,
          cards: [
            ...column.cards,
            {
              ...card,
              id: Date.now(),
              title: `${card.title} (Copy)`,
            },
          ],
        };
      })
    );
  }, []);

  /* ---------- COLUMN ACTIONS ---------- */

  const handleRenameColumn = (column) => {
    setColumnToRename(column);
    setRenameOpen(true);
  };

  const handleDuplicateColumn = useCallback((column) => {
  const newColumn = {
    ...structuredClone(column),
    id: `column-${Date.now()}`,
    title: `${column.title} Copy`,
    cards: column.cards.map((card, index) => ({
      ...structuredClone(card),
      id: `card-${Date.now()}-${index}`,
    })),
  };

  setColumns((previous) => [...previous, newColumn]);
}, []);

  const handleDeleteColumn = (columnId) => {
    setColumnToDelete(columnId);
    setDeleteOpen(true);
  };

  const confirmDeleteColumn = () => {
    setColumns((previous) =>
      previous.filter(
        (column) => column.id !== columnToDelete
      )
    );

    setDeleteOpen(false);
  };

  const saveColumnName = (newName) => {
    setColumns((previous) =>
      previous.map((column) =>
        column.id === columnToRename.id
          ? {
              ...column,
              title: newName,
            }
          : column
      )
    );

    setRenameOpen(false);
  };  /* ---------- CARD MODAL SAVE ---------- */

  const handleSave = useCallback(
    (formData) => {
      if (modalMode === "add") {
        setColumns((previous) =>
          previous.map((column) => {
            if (column.id !== selectedColumn) {
              return column;
            }

            return {
              ...column,
              cards: [
                ...column.cards,
                {
                  id: Date.now(),
                  title: formData.title,
                  priority: formData.priority,
                  dueDate: formData.dueDate,
                  members: ["JD"],
                  comments: 0,
                  attachments: 0,
                },
              ],
            };
          })
        );
      }

      if (modalMode === "edit") {
        setColumns((previous) =>
          previous.map((column) => ({
            ...column,
            cards: column.cards.map((card) =>
              card.id === selectedCard.id
                ? {
                    ...card,
                    ...formData,
                  }
                : card
            ),
          }))
        );
      }

      closeModal();
    },
    [
      modalMode,
      selectedColumn,
      selectedCard,
      closeModal,
    ]
  );

  const modalData = useMemo(
    () => selectedCard,
    [selectedCard]
  );

  return (
    <>
      <div className={styles.board}>
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            onAddCard={handleAddCard}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onCardDragStart={handleDragStart}
            onEditCard={handleEditCard}
            onDeleteCard={handleDeleteCard}
            onDuplicateCard={handleDuplicateCard}
            onRenameColumn={handleRenameColumn}
            onDuplicateColumn={handleDuplicateColumn}
            onDeleteColumn={handleDeleteColumn}
          />
        ))}
      </div>

      <CardModal
        open={modalOpen}
        mode={modalMode}
        initialData={modalData}
        onClose={closeModal}
        onSave={handleSave}
      />

      <RenameColumnModal
        open={renameOpen}
        column={columnToRename}
        onClose={() => setRenameOpen(false)}
        onSave={saveColumnName}
      />

      <DeleteConfirmModal
        open={deleteOpen}
        title="Delete Column"
        message="Are you sure you want to delete this column? All cards inside it will also be removed."
        onCancel={() => setDeleteOpen(false)}
        onConfirm={confirmDeleteColumn}
      />
    </>
  );
}