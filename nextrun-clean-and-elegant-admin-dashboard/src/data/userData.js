export const userProfile = {
  id: 1,
  name: "Cahaya Hikari",
  role: "UI Designer",
  location: "Jakarta, Indonesia",
  phone: "+12 345 6789 0",
  email: "jordan@mail.com",
  avatar: null,
};

export const userPlan = {
  id: 1,
  name: "Premium",
  storage: "500 GB Storage",
  feature: "All Premium Features",
};

export const initialUserContacts = [
  {
    id: 1,
    name: "Samantha William",
    role: "Marketing Manager",
    avatar: null,
  },
  {
    id: 2,
    name: "Tony Soap",
    role: "Marketing Manager",
    avatar: null,
  },
  {
    id: 3,
    name: "Karen Hope",
    role: "Marketing Manager",
    avatar: null,
  },
  {
    id: 4,
    name: "Jordan Nico",
    role: "Marketing Manager",
    avatar: null,
  },
  {
    id: 5,
    name: "Nadila Adja",
    role: "Marketing Manager",
    avatar: null,
  },
];

export const initialUserMessages = [
  {
    id: 1,
    contactId: 1,
    name: "Samantha William",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
    messages: [
      {
        id: 1,
        sender: "contact",
        text: "Lorem ipsum dolor sit amet...",
        time: "12:45 PM",
      },
    ],
  },
  {
    id: 2,
    contactId: 2,
    name: "Tony Soap",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
    messages: [
      {
        id: 1,
        sender: "contact",
        text: "Lorem ipsum dolor sit amet...",
        time: "12:45 PM",
      },
    ],
  },
  {
    id: 3,
    contactId: 3,
    name: "Karen Hope",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 0,
    messages: [
      {
        id: 1,
        sender: "contact",
        text: "Lorem ipsum dolor sit amet...",
        time: "12:45 PM",
      },
    ],
  },
  {
    id: 4,
    contactId: 4,
    name: "Jordan Nico",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
    messages: [
      {
        id: 1,
        sender: "contact",
        text: "Lorem ipsum dolor sit amet...",
        time: "12:45 PM",
      },
    ],
  },
  {
    id: 5,
    contactId: 5,
    name: "Nadila Adja",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 0,
    messages: [
      {
        id: 1,
        sender: "contact",
        text: "Lorem ipsum dolor sit amet...",
        time: "12:45 PM",
      },
    ],
  },
];

export const userActivities = [
  {
    id: 1,
    person: "Karen Hope",
    before: "moved task ",
    highlight: "“User Research“",
    after: " from On Progress to Done",
    highlightType: "purple",
    date: "2 March 2021, 13:45 PM",
  },
  {
    id: 2,
    person: "Samantha William",
    before: "add new 4 attached files on task ",
    highlight: "“Photo’s Assets“",
    after: "",
    highlightType: "cyan",
    date: "2 March 2021, 13:45 PM",
  },
  {
    id: 3,
    person: "Tony Soap",
    before: "invite you in task ",
    highlight: "“Wireframing“",
    secondHighlight: "“Hi-fidelity“",
    between: " and ",
    after: "",
    highlightType: "blue",
    date: "2 March 2021, 13:45 PM",
  },
  {
    id: 4,
    person: "Samantha William",
    before: "created new Task",
    highlight: "",
    after: "",
    highlightType: "blue",
    date: "2 March 2021, 13:45 PM",
  },
  {
    id: 5,
    person: "Nadila Adja",
    before: "created new Task",
    highlight: "",
    after: "",
    highlightType: "blue",
    date: "2 March 2021, 13:45 PM",
  },
];