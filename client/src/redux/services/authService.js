import axiosInstance from '../../config/axiosInstance';

export const postService = async (endpoint, queryParams) => {
  try {
    const response = await axiosInstance.post(endpoint, queryParams);
    const { token, user } = response.data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userRole', user.role);
    return { user };
  } catch (error) {
    throw new Error(error || 'An error occurred');
  }
};
