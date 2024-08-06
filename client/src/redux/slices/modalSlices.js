import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    activeModal: null,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.activeModal = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
