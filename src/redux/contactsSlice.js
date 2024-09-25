import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

const initialContactsState = {
    { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
    { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
    { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
    { id: 'id-4', name: 'Amber Sevilla', number: '783-51-90' },
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ name, number }) {
                return { payload: { id: nanoid(), name, number } };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const index = state.findIndex(contact => contact.id === action.payload);
                if (index !== -1) {
                    state.splice(index, 1);
                }
            },
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;