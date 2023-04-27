import { NextPage } from 'next';
import React from 'react';
import { SignUpForm } from '../../components/signup-form';

const Freshservice: NextPage = () => {
  return <SignUpForm type="freshchat" />;
};

export default Freshservice;