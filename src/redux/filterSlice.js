import { createSlice } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const initialFilterState = '';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setFilter: {
            reducer(_state, action) {
                return action.payload;
            },
        },
    },
});

export const { setFilter } = filterSlice.actions;