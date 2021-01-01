import { fontSizeXl } from '@faraujo/loop-design-system/build/product-1/tokens';
import React, { useState } from 'react';

import logo from '../../img/tamires-logo.svg';
import Modal from "../Modal";
import { Logo, Head, Contact, Work } from './styles.js';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = (status) => setIsVisible(status); 

  return (
    <Head>
      <Logo src={logo} alt="logo" />
      <Contact href="https://www.linkedin.com/in/tamireslelis/" alt="this is my linkedin link">Contact</Contact>
      <Work onClick={() => showModal(true)}>Work</Work>
      <Modal isVisible={isVisible} showModal={showModal}/>

    </Head >
  );
}

export default Header;

