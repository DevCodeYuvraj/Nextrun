"use client";

import { MdAdd, MdSearch } from "react-icons/md";

import ChatContact from "./ChatContact";

import styles from "./ChatSidebar.module.css";

const INITIAL_CHAT_COUNT = 3;

export default function ChatSidebar({
  chats,
  activeChatId,
  search,
  showMore,
  onSearchChange,
  onSelectChat,
  onToggleMore,
  onNewChat,
}) {
  const query = search.trim().toLowerCase();

  const groups = chats.filter(
    (chat) =>
      chat.type === "group" &&
      chat.name.toLowerCase().includes(query)
  );

  const allPeople = chats.filter(
    (chat) =>
      chat.type === "chat" &&
      chat.name.toLowerCase().includes(query)
  );

  const people =
    showMore || query
      ? allPeople
      : allPeople.slice(0, INITIAL_CHAT_COUNT);

  return (
    <section className={styles.card}>
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <MdSearch />

          <input
            type="text"
            value={search}
            placeholder="Search here..."
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
          />
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={onNewChat}
          aria-label="New chat"
        >
          <MdAdd />
        </button>
      </div>

      <div className={styles.scrollArea}>
        <div className={styles.section}>
          <h3>Groups</h3>

          <div className={styles.list}>
            {groups.map((chat) => (
              <ChatContact
                key={chat.id}
                chat={chat}
                active={activeChatId === chat.id}
                onClick={() => onSelectChat(chat.id)}
              />
            ))}

            {groups.length === 0 && (
              <p className={styles.empty}>
                No groups found.
              </p>
            )}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Chats</h3>

          <div className={styles.list}>
            {people.map((chat) => (
              <ChatContact
                key={chat.id}
                chat={chat}
                active={activeChatId === chat.id}
                onClick={() => onSelectChat(chat.id)}
              />
            ))}

            {people.length === 0 && (
              <p className={styles.empty}>
                No chats found.
              </p>
            )}
          </div>
        </div>
      </div>

      {!query &&
        allPeople.length > INITIAL_CHAT_COUNT && (
          <button
            type="button"
            className={styles.viewMore}
            onClick={onToggleMore}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        )}
    </section>
  );
}