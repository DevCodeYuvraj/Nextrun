import { createSlice } from "@reduxjs/toolkit";
import { initialMails } from "@/data/mailData";

const initialState = {
  mails: initialMails,
  activeFolder: "inbox",
  activeLabel: null,
  selectedMailId: initialMails[0]?.id ?? null,
  isComposeOpen: false,
};

const emailSlice = createSlice({
  name: "email",

  initialState,

  reducers: {
    openCompose(state) {
      state.isComposeOpen = true;
    },

    closeCompose(state) {
      state.isComposeOpen = false;
    },

    changeFolder(state, action) {
      state.activeFolder = action.payload;
      state.activeLabel = null;

      const mails =
        action.payload === "favourite"
          ? state.mails.filter((mail) => mail.starred)
          : state.mails.filter(
              (mail) => mail.folder === action.payload
            );

      state.selectedMailId = mails[0]?.id ?? null;
    },

    changeLabel(state, action) {
      state.activeLabel = action.payload;
      state.activeFolder = null;

      const mails = state.mails.filter(
        (mail) => mail.label === action.payload
      );

      state.selectedMailId = mails[0]?.id ?? null;
    },

    selectMail(state, action) {
      state.selectedMailId = action.payload;
    },

    toggleStar(state, action) {
      const mail = state.mails.find(
        (item) => item.id === action.payload
      );

      if (mail) {
        mail.starred = !mail.starred;
      }
    },

    deleteMail(state, action) {
      state.mails = state.mails.filter(
        (mail) => mail.id !== action.payload
      );

      if (state.selectedMailId === action.payload) {
        state.selectedMailId =
          state.mails[0]?.id ?? null;
      }
    },

    sendMail(state, action) {
      const newMail = {
        id: Date.now(),
        sender: "You",
        email: action.payload.receiver,
        subject: action.payload.subject,
        message: action.payload.message,
        fullMessage: action.payload.message,
        folder: "sent",
        category: "primary",
        time: "Now",
        date: new Date().toLocaleString(),
        starred: false,
        unread: false,
        attachment: false,
        badge: null,
        badgeColor: null,
        notification: null,
        label: null,
      };

      state.mails.unshift(newMail);

      state.isComposeOpen = false;
    },
  },
});

export const {
  openCompose,
  closeCompose,
  changeFolder,
  changeLabel,
  selectMail,
  toggleStar,
  deleteMail,
  sendMail,
} = emailSlice.actions;

export default emailSlice.reducer;