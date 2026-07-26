"use client";

import { useMemo, useState } from "react";

import ChatSidebar from "./ChatSidebar";
import Conversation from "./Conversation";
import NewChatModal from "./NewChatModal";

import { initialChatItems } from "@/data/chatData";

import styles from "./ChatPageContent.module.css";

export default function ChatPageContent() {
  const [chats, setChats] = useState(initialChatItems);
  const [activeChatId, setActiveChatId] = useState(
    "samantha-william"
  );

  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [newChatOpen, setNewChatOpen] = useState(false);

  const activeChat = useMemo(() => {
    return (
      chats.find((chat) => chat.id === activeChatId) ||
      chats[0] ||
      null
    );
  }, [chats, activeChatId]);

  const handleSelectChat = (id) => {
    setActiveChatId(id);

    setChats((previous) =>
      previous.map((chat) =>
        chat.id === id
          ? {
              ...chat,
              unread: 0,
            }
          : chat
      )
    );
  };

  const handleSendMessage = (text, attachment = null) => {
    if (!activeChat) return;

    const trimmedText = text.trim();

    if (!trimmedText && !attachment) {
      return;
    }

    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const message = {
      id: Date.now(),
      sender: "me",
      text: trimmedText,
      time,
      attachment,
    };

    setChats((previous) =>
      previous.map((chat) =>
        chat.id === activeChat.id
          ? {
              ...chat,
              preview:
                trimmedText ||
                attachment?.name ||
                "Attachment",
              time,
              messages: [...chat.messages, message],
            }
          : chat
      )
    );
  };

  const handleAddChat = (newChat) => {
    const chat = {
      id: `chat-${Date.now()}`,
      type: "chat",
      name: newChat.name,
      preview: "Start a new conversation...",
      time: "",
      unread: 0,
      color: "gray",
      online: true,
      messages: [],
    };

    setChats((previous) => [...previous, chat]);
    setActiveChatId(chat.id);
    setNewChatOpen(false);
    setSearch("");
  };

  return (
    <>
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <ChatSidebar
            chats={chats}
            activeChatId={activeChatId}
            search={search}
            showMore={showMore}
            onSearchChange={setSearch}
            onSelectChat={handleSelectChat}
            onToggleMore={() =>
              setShowMore((previous) => !previous)
            }
            onNewChat={() => setNewChatOpen(true)}
          />
        </aside>

        <main className={styles.content}>
          <Conversation
            chat={activeChat}
            onSendMessage={handleSendMessage}
          />
        </main>
      </div>

      <NewChatModal
        open={newChatOpen}
        onClose={() => setNewChatOpen(false)}
        onAdd={handleAddChat}
      />
    </>
  );
}