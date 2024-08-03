import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postService } from '../services/authService';

// CREATE NEW user -- USER
export const registerUser = createAsyncThunk(
  'auth/register_user',
  async (queryParams, { rejectWithValue }) => {
    try {
      return await postService('/user/register', queryParams);
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);
// CREATE NEW user -- USER/ADMIN
export const loginUser = createAsyncThunk(
  'auth/login_user',
  async (queryParams, { rejectWithValue }) => {
    try {
      return await postService(queryParams);
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('authToken'),
    userRole: localStorage.getItem('userRole') || null,
    user: null,
    allUsers: null,
    isLoading: false,
    userCount: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      state.isAuthenticated = false;
      state.userRole = null;
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // for USER registration -- USER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userRole = action.payload.user.role;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
