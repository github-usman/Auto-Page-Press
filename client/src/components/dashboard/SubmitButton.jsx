import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPages } from '../../redux/slices/wordpresFormSlice';

const SubmitButton = ({ serErrorsDashb }) => {
  const dispatch = useDispatch();
  const wpCredentials = useSelector(
    (state) => state.wordpressForm.wpCredentials
  );
  const metaDescAndContent = useSelector(
    (state) => state.wordpressForm.metaDescAndContent
  );
  const body = useSelector((state) => state.wordpressForm.body);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (wpCredentials.username === '')
      newErrors.username = 'Please Enter user name';
    if (wpCredentials.baseUrl === '')
      newErrors.baseUrl = 'Please Enter your Website base url';
    if (wpCredentials.password === '')
      newErrors.password = 'Please Enter your password';
    if (metaDescAndContent.title === '')
      newErrors.title = 'Please Enter A title for your website';
    if (metaDescAndContent.slug === '')
      newErrors.slug = 'Please Enter slug for routing params for your web.';
    if (metaDescAndContent.pages.length < 1)
      newErrors.pages = 'Please Enter Dynamic Value for your particular pages';
    if (body === '')
      newErrors.bodyContent =
        'Please Enter wordpress body content information here.';

    if (Object.keys(newErrors).length > 0) {
      serErrorsDashb(newErrors);
    } else {
      serErrorsDashb({});
      const queryParams = {
        ...wpCredentials,
        ...metaDescAndContent,
        body,
      };

      dispatch(createPages(queryParams));
    }
  };

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="max-w-sm w-full backdrop-blur-3xl hover:bg-[#6b8ce18b] bg-dblue text-white border-[#9a979792] border text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program"
        onClick={handleSubmit}
      >
        Create Your Pages
      </button>
    </div>
  );
};

export default SubmitButton;
