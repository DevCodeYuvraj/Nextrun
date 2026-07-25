import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  selectedContact: null,
  search: "",
};

const contactSlice = createSlice({
  name: "contacts",

  initialState,

  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },

    addContact(state, action) {
      state.contacts.unshift(action.payload);
    },

    updateContact(state, action) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );

      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

      if (state.selectedContact === action.payload) {
        state.selectedContact = null;
      }
    },

    selectContact(state, action) {
      state.selectedContact = action.payload;
    },

    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  setContacts,
  addContact,
  updateContact,
  deleteContact,
  selectContact,
  setSearch,
} = contactSlice.actions;

export default contactSlice.reducer;