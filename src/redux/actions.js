import { nanoid } from "nanoid";

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');