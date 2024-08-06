import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    activeModal: null,
  },
  reducers: {
    toggleModal: (state, action) => {
      console.log('Current activeModal:', state.activeModal);
      console.log('Toggling with payload:', action.payload);
      state.activeModal = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
