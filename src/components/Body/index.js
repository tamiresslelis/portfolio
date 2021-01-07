import React from "react";

import Linkedin from 'images/Linkedin.svg';
import Dribbble from 'images/Dribbble.svg';
import Behance from 'images/Behance.svg';
import Medium from 'images/Medium.svg';
import foto from 'images/foto.png';

import { Section, H5, H3, P, Img, List } from './styles.js';

import Link from "components/Link";

const Body = () => {
  return (
    <Section>
      <div>
        <H5>Hi, I'm Tamires Lelis</H5>
        <H3>
          User
          Experience
          Designer
        </H3>
        <P>Human behavior has always fascinated me and that is the reason</P>
        <P>I enjoy creating user-centric, delightful systems and apps.</P>
        <List>
          <li>
            <Link href="https://www.linkedin.com/in/tamireslelis" src={Linkedin} alt="linkedin" />
          </li>
          <li>
            <Link href="https://dribbble.com/tamireslelis" src={Dribbble} alt="dribbble" />
          </li>
          <li>
            <Link href="https://www.behance.net/tamireslelis/" src={Behance} alt="behance" />
          </li>
          <li>
            <Link href="https://medium.com/@tamireslelis" src={Medium} alt="medium" />
          </li>
        </List>
      </div>
      <div>
        <Img src={foto} className="App-logo" alt="It's me here!" />
      </div>
    </Section>
  );
}

export default Body;
