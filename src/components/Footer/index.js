import React from "react";
import { Container, SectionProblemTogether, Data, SkillList, Button } from './styles.js';


const Footer = () => {
  return (
    <Container>
      <SectionProblemTogether>
        Let's
        solve
        a problem
        together
        </SectionProblemTogether>

      <SkillList>
        <li><strong>I can help you with...</strong></li>
        <li>User Research</li>
        <li>Prototype</li>
        <li>Wireframe</li>
        <li>Interface Design</li>
      </SkillList>
      <SkillList>
        <li>Usability Testing</li>
        <li>Design Workshops</li>
        <li>Stakeholders Engagements</li>
        <li><Button>Talk to me</Button></li>
      </SkillList>
      <Data>Since 2020 - Tamires lelis</Data>
    </Container>
  );
}

export default Footer;
