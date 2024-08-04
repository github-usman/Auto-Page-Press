import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPages } from '../../redux/slices/wordpresFormSlice';

const SubmitButton = () => {
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

    const queryParams = {
      ...wpCredentials,
      ...metaDescAndContent,
      body,
    };

    dispatch(createPages(queryParams));
  };

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="max-w-sm w-full bg-dblue text-white border-[#9a979792] border text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program"
        onClick={handleSubmit}
      >
        Create Your Pages
      </button>
    </div>
  );
};

export default SubmitButton;
