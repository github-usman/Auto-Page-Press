import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postService } from '../services/authService';

// CREATE NEW user -- USER
export const createPages = createAsyncThunk(
  'auth/register_user',
  async (queryParams, { rejectWithValue }) => {
    try {
      return await postService('/wp-template/create', queryParams);
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);

const initialState = {
  wpCredentials: {
    username: localStorage.getItem('username') || '',
    baseUrl: localStorage.getItem('baseUrl') || '',
    password: localStorage.getItem('password') || '',
  },
  metaDescAndContent: {
    title: localStorage.getItem('title') || '',
    slug: localStorage.getItem('slug') || '',
    pages: [],
  },
  body: localStorage.getItem('body') || '',
  advancedField: {},
  reponses: null,
  isLoading: false,
  error: null,
};

const wordpresFormSlice = createSlice({
  name: 'wordpressForm',
  initialState,
  reducers: {
    updateWpCredentials(state, action) {
      state.wpCredentials = { ...state.wpCredentials, ...action.payload };
    },
    addPage(state) {
      state.metaDescAndContent.pages.push('');
    },
    removePage(state, action) {
      state.metaDescAndContent.pages.splice(action.payload, 1);
    },
    updateMetaDescAndContent(state, action) {
      state.metaDescAndContent = {
        ...state.metaDescAndContent,
        ...action.payload,
      };
    },
    updateBody(state, action) {
      state.body = action.payload;
    },
    updateAdvancedField(state, action) {
      state.advancedField = { ...state.advancedField, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // for USER registration -- USER
      .addCase(createPages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.reponses = action.payload;
      })
      .addCase(createPages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  updateWpCredentials,
  addPage,
  removePage,
  updateMetaDescAndContent,
  updateBody,
  updateAdvancedField,
} = wordpresFormSlice.actions;
export default wordpresFormSlice.reducer;
