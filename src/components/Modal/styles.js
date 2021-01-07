import styled, { keyframes } from "styled-components";

import { List } from "../Body/styles";
import { TLTokens } from '@faraujo/loop-design-system';

const translate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(30deg);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .4;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  font-family: ${TLTokens.fontFamily01};
`

export const Image = styled.img`
  z-index: 88888;
  position: absolute;
  top: 5%;
  right: 5%;
  animation: ${translate} 3s alternate infinite;
  
  @media(max-width: 800px){
    top: 1%;
    right: 5%;
    width: 30%;
  }
`

export const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  border-radius: 3px;
  max-width: 500px;
  min-width: 20em;
  padding: 48px;
  margin: 15% auto;
  width: 60%;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  
  p, h1 {
    margin: 0;
  }
  
  p:first-of-type {
    padding-bottom: 8px;
  }
  
  @media(max-width: 800px){
    padding: 24px;
  }
`

export const ListModal = styled(List)`
  padding: 32px 0 0 0;
  
  @media(max-width: 800px) {
    padding: 12px 0 0 0;
  }
`;


export const CloseButton = styled.div`
  cursor: pointer;
  z-index: 99999;
  display: flex;
  justify-content: flex-end;
  margin-right: -24px;
  margin-top: -24px;
`;
