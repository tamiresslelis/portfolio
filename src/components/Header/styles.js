import styled from 'styled-components';

import { TLTokens } from '@faraujo/loop-design-system';

export const Logo = styled.img`
  margin: ${TLTokens.spacingStackQuarck} 0;
`;

export const Head = styled.header`
  height: ${TLTokens.spacingStackXxl};
  box-shadow: ${TLTokens.shadowLevel2};
  padding: ${TLTokens.spacingStackQuarck} 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px){
    padding: ${TLTokens.spacingStackNano} ${TLTokens.spacingStackXxxs};
  }
`;

export const Contact = styled.a`
  font-family: ${TLTokens.fontFamily02};
  font-weight: ${TLTokens.fontWeightBold};
  font-size: ${TLTokens.fontSizeXs};
  align-self: center;
  text-decoration: none;
  color: ${TLTokens.colorNeutralDarkest};
`;
