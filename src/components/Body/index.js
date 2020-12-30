import React from "react";

import Linkedin from '../../img/Linkedin.svg';
import Dribbble from '../../img/Dribbble.svg';
import Behance from '../../img/Behance.svg';
import Medium from '../../img/Medium.svg';
import photo from '../../img/foto-perfil.png';

import { Section, H5, H3, P, Img, List } from './styles.js';

const Body = () => {
  return (
    <Section>
      <div>
        <H5>Hi, I'm Tamires Lelis</H5>
        <H3>User
        Experience
        Designer
        </H3>
        <P>Human behavior has always fascinated me and that is the reason</P>
        <P>I enjoy creating user-centric,delightful systems and apps.</P>
        <List>
          <li><img src={Linkedin} alt="linkedin" /></li>
          <li><img src={Dribbble} alt="dribbble" /></li>
          <li><img src={Behance} alt="behance" /></li>
          <li><img src={Medium} alt="medium" /></li>
        </List>
      </div>
      <div>
        <Img src={photo} className="App-logo" alt="It's me here!" />
      </div>
    </Section >
  );
}

export default Body;
