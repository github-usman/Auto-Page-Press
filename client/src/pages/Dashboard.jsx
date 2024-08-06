import React, { useState } from 'react';
import WpCredetials from '../components/dashboard/WpCredentials';
import MetaDescAndContent from '../components/dashboard/MetaDescAndContent';
import Body from '../components/dashboard/Body';
import SubmitButton from '../components/dashboard/SubmitButton';
import AdvancedField from '../components/dashboard/AdvancedField';

const Dashboard = () => {
  const [errorsDashb, serErrorsDashb] = useState({});
  return (
    <div className="flex flex-col gap-[1rem] my-[1rem] px-4 md:px-6">
      <WpCredetials errorsDashb={errorsDashb} />
      <MetaDescAndContent errorsDashb={errorsDashb} />
      <Body errorsDashb={errorsDashb} />
      <AdvancedField />
      <SubmitButton errorsDashb={errorsDashb} serErrorsDashb={serErrorsDashb} />
    </div>
  );
};

export default Dashboard;
