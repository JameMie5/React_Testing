import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person, PersonState } from './personTypes';
import { RootState } from '../../app/Store';

const initialState: PersonState = {
  data: [],
  loading: false,
  error: null,
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.data.push(action.payload);
    },
    deletePerson: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((person) => person.id !== action.payload);
    },
  },
});

export const { addPerson, deletePerson } = personSlice.actions;

export const selectAllPersons = (state: RootState) => state.person.data;

export default personSlice.reducer;
