import styled from 'styled-components';

import { TLTokens } from '@faraujo/loop-design-system';

export const Container = styled.footer`
  background-color: ${TLTokens.colorBrandPrimaryDarkest};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 112px;
  flex-wrap: wrap;

  @media(max-width: 800px) {
    padding: ${TLTokens.spacingStackXxs} ${TLTokens.spacingStackXxxs};
    flex-direction: column;
  }
`;

export const SectionProblemTogether = styled.section`
  font-family: ${TLTokens.fontFamily01};
  font-weight: ${TLTokens.fontWeightBold};
  font-size: ${TLTokens.fontSizeXxl};
  color: ${TLTokens.colorNeutralLightest};
  line-height: ${TLTokens.lineHeightMedium};
  width: 219px;
  padding-top: ${TLTokens.spacingStackXl};
  
  @media(max-width: 800px) {
    padding-top: ${TLTokens.spacingStackXxxs};
  }
`;

export const Data = styled.p`
  flex-basis: 100%;
  text-align: center;
  font-family: ${TLTokens.fontFamily02};
  font-weight: ${TLTokens.fontWeightLight};
  font-size: ${TLTokens.fontSizeXxxs};
  color: ${TLTokens.colorNeutralLightest};
  padding: ${TLTokens.spacingStackXs} 0 ${TLTokens.spacingStackXxs} 0;
  
  @media(max-width: 800px) {
    padding: ${TLTokens.spacingStackXxs} 0 0 0;
  }
`;

export const SkillList = styled.ul`
  font-family: ${TLTokens.fontFamily02};
  font-weight: ${TLTokens.fontWeightRegular};
  font-size: ${TLTokens.fontSizeXs};
  color: ${TLTokens.colorNeutralLightest};
  line-height:${TLTokens.lineHeightDistant};
  padding-top: ${TLTokens.spacingStackXl};
  list-style: none;
  padding-left: 0;
  
  li { 
    padding-bottom: 8px;
  }
  
  @media(max-width: 800px) {
    padding: 0;
    margin: 0;
    
    &:first-of-type {
      padding: 40px 0 0 0;
    }
  }
`;

export const Button = styled.button`
  border: none;
  font-family: ${TLTokens.fontFamily02};
  font-weight: ${TLTokens.fontWeightBold};
  line-height:${TLTokens.lineHeightDistant};
  font-size: ${TLTokens.fontSizeXs};
  background-color: ${TLTokens.colorNeutralLightest};
  padding: 12px 16px;
  border-radius: ${TLTokens.borderWidthHeavy};
  margin-top: 8px;
  cursor: pointer;
`;
