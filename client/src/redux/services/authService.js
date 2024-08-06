import axiosInstance from '../../config/axiosInstance';

// for wp
export const postServiceWp = async (endpoint, queryParams) => {
  try {
    const { username, baseUrl, password, title, slug, pages, body } =
      queryParams;
    // string in localStorage so that it is available for non login user
    localStorage.setItem('username', username);
    localStorage.setItem('baseUrl', baseUrl);
    localStorage.setItem('password', password);
    localStorage.setItem('title', title);
    localStorage.setItem('slug', slug);
    localStorage.setItem('pages', pages);
    localStorage.setItem('body', body);
    const response = await axiosInstance.post(endpoint, queryParams);

    return response;
  } catch (error) {
    return error || 'An error occurred ';
  }
};

// user/admin authorization
export const postService = async (endpoint, queryParams) => {
  const response = await axiosInstance.post(endpoint, queryParams);
  return response.data;
};
