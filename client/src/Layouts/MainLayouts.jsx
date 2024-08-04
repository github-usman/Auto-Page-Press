import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginRegiAcitve from '../components/reusable-component/LoginRegiAcitve';

const MainLayouts = ({ children }) => {
  return (
    <div>
      <Header />
      <LoginRegiAcitve />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayouts;
