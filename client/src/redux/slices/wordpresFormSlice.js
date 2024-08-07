import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postServiceWp } from '../services/authService';

// CREATE NEW user -- USER
export const createPages = createAsyncThunk(
  'wordpressForm/create_pages',
  async (queryParams, { rejectWithValue }) => {
    try {
      return await postServiceWp('/wp-template/create', queryParams);
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
    mainTitle: localStorage.getItem('mainTitle') || '',
    slug: localStorage.getItem('slug') || '',
    customMetaDesc: localStorage.getItem('customMetaDesc') || '',
    pages: ['Dynamic pages example'],
  },
  bodyContent: localStorage.getItem('bodyContent') || '',
  advancedField: {},
  responses: null,
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
      state.bodyContent = action.payload;
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
        state.responses = action.payload;
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
