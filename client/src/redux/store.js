import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import modalReducer from './slices/modalSlices';
import wordpressFormReducer from './slices/wordpresFormSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    wordpressForm: wordpressFormReducer,
  },
});
