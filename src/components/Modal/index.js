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
                        <li><img src={Linkedin} alt="linkedin" /></li>
                        <li><img src={Dribbble} alt="dribbble" /></li>
                        <li><img src={Behance} alt="behance" /></li>
                        <li><img src={Medium} alt="medium" /></li>
                    </ListModal>
                </ModalContainer>
            </ModalWrapper>
        </div>
    )
}

export default Modal;
