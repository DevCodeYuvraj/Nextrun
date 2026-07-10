export const initialMails = [
  // =========================
  // INBOX
  // =========================

  {
    id: 1,
    sender: "Samantha William",
    email: "samantha@email.com",
    subject: "Weekly Meeting Schedule with Stakeholders",
    message:
      "Architecto consequatur molestias repellat qui. Quia est sed doloremque veniam est rerum.",
    fullMessage:
      "Hi Nella,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nRegards,\nSamantha",
    time: "2h ago",
    date: "Today, March 30th 2021 | 04:45 PM",
    starred: false,
    attachment: true,
    folder: "inbox",
    category: "primary",
    label: null,
  },

  {
    id: 2,
    sender: "Tony Soap",
    email: "tony@email.com",
    subject: "Project Progress Update",
    message:
      "Architecto consequatur molestias repellat qui. Quia est sed doloremque veniam est rerum.",
    fullMessage:
      "Hello,\n\nHere is the latest progress update regarding our current project.\n\nRegards,\nTony",
    time: "18min ago",
    date: "Today, March 30th 2021 | 03:30 PM",
    starred: true,
    folder: "inbox",
    category: "primary",
    badge: "Important",
    badgeColor: "important",
    label: "important",
    notification: 2,
  },

  {
    id: 3,
    sender: "Jordan Nico",
    email: "jordan@email.com",
    subject: "Social Media Campaign",
    message:
      "The new social media campaign is ready for review.",
    fullMessage:
      "Hello,\n\nThe new social media campaign is ready for review. Please send your feedback.\n\nRegards,\nJordan",
    time: "18min ago",
    date: "Today, March 30th 2021 | 03:15 PM",
    starred: true,
    folder: "inbox",
    category: "socials",
    label: "read",
    notification: 1,
  },

  {
    id: 4,
    sender: "Karen Hope",
    email: "karen@email.com",
    subject: "Website Design Update",
    message:
      "The latest website design screens are ready for review.",
    fullMessage:
      "Hi,\n\nI have completed the latest website design update. Please send me your feedback.\n\nRegards,\nKaren",
    time: "18min ago",
    date: "Today, March 30th 2021 | 03:00 PM",
    starred: false,
    folder: "inbox",
    category: "promotion",
    badge: "Work in Progress",
    badgeColor: "work",
    label: "work",
  },

  // =========================
  // SENT
  // =========================

  {
    id: 5,
    sender: "You",
    email: "me@nextrun.com",
    subject: "Dashboard Analytics",
    message:
      "The latest dashboard analytics report is attached.",
    fullMessage:
      "Hello,\n\nPlease find the latest dashboard analytics report attached.\n\nRegards,\nNella",
    time: "Yesterday",
    date: "Yesterday | 02:30 PM",
    starred: false,
    folder: "sent",
    category: "primary",
    label: null,
  },

  {
    id: 6,
    sender: "You",
    email: "me@nextrun.com",
    subject: "Client Proposal",
    message:
      "Here is the proposal we discussed.",
    fullMessage:
      "Hello,\n\nHere is the client proposal we discussed during our meeting.\n\nRegards,\nNella",
    time: "Yesterday",
    date: "Yesterday | 11:45 AM",
    starred: true,
    folder: "sent",
    category: "primary",
    label: "important",
    badge: "Important",
    badgeColor: "important",
  },

  // =========================
  // DRAFT
  // =========================

  {
    id: 7,
    sender: "Draft",
    email: "",
    subject: "Upcoming Project",
    message:
      "This email has not been sent yet.",
    fullMessage:
      "Hello,\n\nI wanted to discuss our upcoming project...",
    time: "1 day ago",
    date: "March 29th 2021 | 05:30 PM",
    starred: false,
    folder: "draft",
    category: "primary",
    label: "work",
    badge: "Work in Progress",
    badgeColor: "work",
  },

  // =========================
  // DELETED
  // =========================

  {
    id: 8,
    sender: "Alex Morgan",
    email: "alex@email.com",
    subject: "Old Meeting Notes",
    message:
      "Notes from our previous meeting.",
    fullMessage:
      "Hello,\n\nHere are the notes from our previous meeting.\n\nRegards,\nAlex",
    time: "3 days ago",
    date: "March 27th 2021 | 01:20 PM",
    starred: false,
    folder: "deleted",
    category: "primary",
    label: null,
  },

  // =========================
  // OFFER
  // =========================

  {
    id: 9,
    sender: "Nextrun Team",
    email: "team@nextrun.com",
    subject: "Special Dashboard Offer",
    message:
      "Take advantage of our latest dashboard offer.",
    fullMessage:
      "Hello,\n\nWe have prepared a special dashboard offer for you.\n\nRegards,\nNextrun Team",
    time: "4 days ago",
    date: "March 26th 2021 | 10:00 AM",
    starred: false,
    folder: "inbox",
    category: "promotion",
    label: "offers",
  },
];