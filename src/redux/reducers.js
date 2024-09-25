import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./actions";

const initialContactsState = [
    { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
    { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
    { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
    { id: 'id-4', name: 'Amber Sevilla', number: '783-51-90' },
];

const initialFilterState = '';

import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from "./actions";

export const contactsReducer = createReducer(initialContactsState, {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload.id),
});

export const filterReducer = createReducer(initialFilterState, {
    [setFilter]: (state, action) => action.payload,
});