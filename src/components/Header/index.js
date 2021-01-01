import React, { useState } from 'react';

import logo from '../../img/tamires-logo.svg';
import Modal from "../Modal";
import { Logo, Head, Contact, Work, Menu } from './styles.js';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = (status) => setIsVisible(status);

  return (
    <Head>
      <Logo src={logo} alt="logo" />
      <Menu>
        <Work onClick={() => showModal(true)}>Work</Work>
        <Contact href="https://www.linkedin.com/in/tamireslelis/" alt="this is my linkedin link">Contact</Contact>
        </Menu>
      <Modal isVisible={isVisible} showModal={showModal} />

    </Head >
  );
}

export default Header;

