import React from 'react';

import Linkedin from 'images/Linkedin.svg';
import Dribbble from 'images/Dribbble.svg';
import CloseOutline from 'images/closeOutline.svg';
import Behance from 'images/Behance.svg';
import Medium from 'images/Medium.svg';
import ModalImg from 'images/modalPicture.svg';

import {
  ModalOverlay,
  ModalWrapper,
  ModalContainer,
  Image,
  ListModal,
  CloseButton
} from './styles'

import Link from 'components/Link';

const Modal = ({isVisible, showModal}) => {
  return (
    <div style={{display: isVisible ? 'block' : 'none'}}>
      <ModalOverlay/>
      <ModalWrapper>
        <ModalContainer>
          <CloseButton onClick={() => showModal(false)}>
            <img src={CloseOutline} alt="close modal"/>
          </CloseButton>
          <h1>
            Waiting...
          </h1>
          <Image src={ModalImg}/>
          <p style={{paddingTop: '40px'}}>We are working to give you the best experience here.</p>
          <p style={{paddingBottom: '24px'}}>But you can see same works in this social networks:</p>
          <ListModal>
            <li>
              <Link href="https://www.linkedin.com/in/tamireslelis" src={Linkedin} alt="linkedin"/>
            </li>
            <li>
              <Link href="https://dribbble.com/tamireslelis" src={Dribbble} alt="dribbble"/>
            </li>
            <li>
              <Link href="https://www.behance.net/tamireslelis/" src={Behance} alt="behance"/>
            </li>
            <li>
              <Link href="https://medium.com/@tamireslelis" src={Medium} alt="medium"/>
            </li>
          </ListModal>
        </ModalContainer>
      </ModalWrapper>
    </div>
  )
}

export default Modal;
