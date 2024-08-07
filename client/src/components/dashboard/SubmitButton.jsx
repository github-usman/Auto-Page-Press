import React, { useEffect } from 'react';
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
  const responses = useSelector((state) => state.wordpressForm.responses);
  const bodyContent = useSelector((state) => state.wordpressForm.bodyContent);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (wpCredentials.username === '')
      newErrors.username = 'Please Enter user name';
    if (wpCredentials.baseUrl === '')
      newErrors.baseUrl = 'Please Enter your Website base url';
    if (wpCredentials.password === '')
      newErrors.password = 'Please Enter your password';
    if (metaDescAndContent.mainTitle === '')
      newErrors.mainTitle = 'Please Enter A title for your website';
    if (metaDescAndContent.slug === '')
      newErrors.slug = 'Please Enter slug for routing params for your web.';
    if (metaDescAndContent.customMetaDesc === '')
      newErrors.customMetaDesc = 'Please Enter meta description for your web.';
    if (metaDescAndContent.pages.length < 1)
      newErrors.pages = 'Please Enter Dynamic Value for your particular pages';
    if (bodyContent === '')
      newErrors.bodyContent =
        'Please Enter wordpress body content information here.';

    if (Object.keys(newErrors).length > 0) {
      serErrorsDashb(newErrors);
    } else {
      serErrorsDashb({});
      const queryParams = {
        ...wpCredentials,
        ...metaDescAndContent,
        bodyContent,
      };

      dispatch(createPages(queryParams));
    }
  };

  useEffect(() => {}, [responses]);

  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <button
        type="submit"
        className="max-w-sm w-full backdrop-blur-3xl hover:bg-[#6b8ce18b] bg-dblue text-white border-[#9a979792] border text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program"
        onClick={handleSubmit}
      >
        Create Your Pages
      </button>
      {responses && (
        <button
          type="submit"
          className=" w-full backdrop-blur-3xl hover:bg-[#62d4868b] bg-[#62d4868b] text-white border text-[15px]  font-bold py-2 referal__benefits__shadow__all_program  "
          onClick={handleSubmit}
        >
          {responses.message}
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
