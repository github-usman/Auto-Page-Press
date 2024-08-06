import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login';
import Register from '../Register';

const LoginRegiAcitve = () => {
  const activeModal = useSelector((state) => state.modal.activeModal);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModal]);
  return (
    <>
      {activeModal === 'register' && <Register />}
      {activeModal === 'login' && <Login />}
    </>
  );
};

export default LoginRegiAcitve;
