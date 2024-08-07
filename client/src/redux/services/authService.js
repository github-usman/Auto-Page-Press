import axiosInstance from '../../config/axiosInstance';

// for wp
export const postServiceWp = async (endpoint, queryParams) => {
  const { username, baseUrl, password, title, slug, pages } = queryParams;
  // string in localStorage so that it is available for non login user
  localStorage.setItem('username', username);
  localStorage.setItem('baseUrl', baseUrl);
  localStorage.setItem('password', password);
  localStorage.setItem('title', title);
  localStorage.setItem('slug', slug);
  localStorage.setItem('pages', pages);
  const response = await axiosInstance.post(endpoint, queryParams);
  return response.data;
};

// user/admin authorization
export const postService = async (endpoint, queryParams) => {
  const response = await axiosInstance.post(endpoint, queryParams);
  return response.data;
};
