import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    activeModal: null,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.activeModal =
        state.activeModal === action.payload ? null : action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
