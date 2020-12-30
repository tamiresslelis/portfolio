import React from 'react';

import logo from '../../img/tamires-logo.svg';

import { Logo, Head, Contact } from './styles.js';

const Header = () => {
  return (
    <Head>
      <Logo src={logo} alt="logo" />
      <Contact href="https://www.linkedin.com/in/tamireslelis/" alt="this is my linkedin link">Contact</Contact>
    </Head >
  );
}

export default Header;

