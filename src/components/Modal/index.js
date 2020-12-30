import React from 'react';

import { ModalOverlay, ModalWrapper, ModalContainer, Image, ListModal } from './styles'

import Linkedin from '../../img/Linkedin.svg';
import Dribbble from '../../img/Dribbble.svg';
import Behance from '../../img/Behance.svg';
import Medium from '../../img/Medium.svg';
import ModalImg from '../../img/modalPicture.svg';

const Modal = () => {
    return (
        <div>
            <ModalOverlay />
            <ModalWrapper>
                <ModalContainer>
                    <h1>
                        Waiting...
                    </h1>
                    <Image src={ModalImg} />
                    <p style={{ paddingTop: '40px' }}>We are working to give you the best experience here..</p>
                    <p style={{ paddingBottom: '24px' }}>But you can see same works in this platforms:</p>
                    <ListModal>
                        <li>
                            <a href="https://www.linkedin.com/in/tamireslelis" target="_blank" rel="noopener noreferrer">
                                <img src={Linkedin} alt="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://dribbble.com/tamireslelis" target="_blank" rel="noopener noreferrer">
                                <img src={Dribbble} alt="dribbble" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/tamireslelis/" target="_blank" rel="noopener noreferrer">
                                <img src={Behance} alt="behance" />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@tamireslelis" target="_blank" rel="noopener noreferrer">
                                <img src={Medium} alt="medium" />
                            </a>
                        </li>
                    </ListModal>
                </ModalContainer>
            </ModalWrapper>
        </div>
    )
}

export default Modal;
