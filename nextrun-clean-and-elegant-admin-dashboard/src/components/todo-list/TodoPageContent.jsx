"use client";

import {
  useMemo,
  useState,
} from "react";

import TodoSidebar from "./TodoSidebar";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoGrid from "./TodoGrid";
import NewTaskModal from "./NewTaskModal";
import EditTaskModal from "./EditTaskModal";

import {
  initialTodoTasks,
} from "@/data/todoData";

import styles from "./TodoPageContent.module.css";

export default function TodoPageContent() {
  const [tasks, setTasks] =
    useState(initialTodoTasks);

  const [activeMenu, setActiveMenu] =
    useState("important");

  const [priorityFilter, setPriorityFilter] =
    useState(null);

  const [view, setView] =
    useState("list");

  const [newTaskOpen, setNewTaskOpen] =
    useState(false);

  const [editTask, setEditTask] =
    useState(null);

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    if (activeMenu === "important") {
      result = result.filter(
        (task) =>
          task.important &&
          !task.trashed
      );
    }

    if (activeMenu === "completed") {
      result = result.filter(
        (task) =>
          task.completed &&
          !task.trashed
      );
    }

    if (activeMenu === "pending") {
      result = result.filter(
        (task) =>
          !task.completed &&
          !task.trashed
      );
    }

    if (activeMenu === "trash") {
      result = result.filter(
        (task) => task.trashed
      );
    }

    if (activeMenu === "more") {
      result = result.filter(
        (task) => !task.trashed
      );
    }

    if (priorityFilter) {
      result = result.filter(
        (task) =>
          task.priority ===
          priorityFilter
      );
    }

    return result;
  }, [
    tasks,
    activeMenu,
    priorityFilter,
  ]);

  const heading = useMemo(() => {
    if (priorityFilter) {
      return `${
        priorityFilter
          .charAt(0)
          .toUpperCase() +
        priorityFilter.slice(1)
      } Task`;
    }

    const headings = {
      important: "Important Task",
      completed: "Completed Task",
      pending: "Pending Task",
      trash: "Trash",
      more: "All Task",
    };

    return (
      headings[activeMenu] ||
      "Important Task"
    );
  }, [activeMenu, priorityFilter]);

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    setPriorityFilter(null);
  };

  const handlePriorityChange = (
    priority
  ) => {
    setPriorityFilter(
      (previous) =>
        previous === priority
          ? null
          : priority
    );
  };

  const handleToggleComplete = (
    id
  ) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
              pending:
                task.completed,
            }
          : task
      )
    );
  };

  const handleToggleImportant = (
    id
  ) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              important:
                !task.important,
            }
          : task
      )
    );
  };

  const handleTrash = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              trashed: true,
            }
          : task
      )
    );
  };

  const handleRestore = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              trashed: false,
            }
          : task
      )
    );
  };

  const handleDeleteForever = (
    id
  ) => {
    setTasks((previous) =>
      previous.filter(
        (task) =>
          task.id !== id
      )
    );
  };

  const handleAddTask = (
    newTask
  ) => {
    setTasks((previous) => [
      {
        id: Date.now(),
        completed: false,
        important: true,
        pending: true,
        trashed: false,
        attachment: false,
        members: ["SW", "TS", "KH"],
        ...newTask,
      },
      ...previous,
    ]);

    setActiveMenu("important");
    setPriorityFilter(null);
    setNewTaskOpen(false);
  };

  const handleUpdateTask = (
    updatedTask
  ) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id ===
        updatedTask.id
          ? updatedTask
          : task
      )
    );

    setEditTask(null);
  };

  return (
    <>
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <TodoSidebar
            activeMenu={activeMenu}
            priorityFilter={
              priorityFilter
            }
            onMenuChange={
              handleMenuChange
            }
            onPriorityChange={
              handlePriorityChange
            }
            onNewTask={() =>
              setNewTaskOpen(true)
            }
          />
        </aside>

        <main className={styles.content}>
          <TodoHeader
            title={heading}
            view={view}
            onViewChange={setView}
          />

          {view === "list" ? (
            <TodoList
              tasks={filteredTasks}
              trashMode={
                activeMenu === "trash"
              }
              onToggleComplete={
                handleToggleComplete
              }
              onToggleImportant={
                handleToggleImportant
              }
              onEdit={setEditTask}
              onTrash={handleTrash}
              onRestore={
                handleRestore
              }
              onDeleteForever={
                handleDeleteForever
              }
            />
          ) : (
            <TodoGrid
              tasks={filteredTasks}
              trashMode={
                activeMenu === "trash"
              }
              onToggleComplete={
                handleToggleComplete
              }
              onToggleImportant={
                handleToggleImportant
              }
              onEdit={setEditTask}
              onTrash={handleTrash}
              onRestore={
                handleRestore
              }
              onDeleteForever={
                handleDeleteForever
              }
            />
          )}
        </main>
      </div>

      <NewTaskModal
        open={newTaskOpen}
        onClose={() =>
          setNewTaskOpen(false)
        }
        onAdd={handleAddTask}
      />

      <EditTaskModal
        task={editTask}
        onClose={() =>
          setEditTask(null)
        }
        onSave={
          handleUpdateTask
        }
      />
    </>
  );
}