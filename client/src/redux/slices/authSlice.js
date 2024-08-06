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
      const response = await postService('/user/login', queryParams);
      const { token, user } = response;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { token, user };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'An error occurred'
      );
    }
  }
);

const initialState = {
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: JSON.parse(localStorage.getItem('user')) || null, // Parse user data
  allUsers: null,
  isLoading: false,
  userCount: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user'); // Clear user data on logout
      state.isAuthenticated = false;
      state.user = null; // Clear user data
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userRole = action.payload.user.role;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userRole = action.payload.user.role;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
