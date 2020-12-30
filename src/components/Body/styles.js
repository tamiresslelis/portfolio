import styled from 'styled-components';

import { TLTokens } from '@faraujo/loop-design-system';

export const Section = styled.section`
  padding: ${TLTokens.spacingStackXxl} 112px;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 800px) {
    padding: 0px ${TLTokens.spacingStackXxxs};
    flex-wrap: wrap-reverse;
  }
`;

export const H5 = styled.h5`
  font-family: ${TLTokens.fontFamily01};
  font-weight: ${TLTokens.fontWeightBold};
  font-size: ${TLTokens.fontSizeMd};
  color: ${TLTokens.colorBrandPrimaryMedium};
  line-height:${TLTokens.lineHeightMedium};
  margin: 0;
  padding-top: 88px;
  
  @media(max-width: 800px) {
     padding-top: 48px;
  }
`;

export const H3 = styled.h3`
  font-family: ${TLTokens.fontFamily01};
  font-weight: ${TLTokens.fontWeightBold};
  font-size: ${TLTokens.fontSizeXl};
  color: ${TLTokens.colorNeutralDark};
  line-height: ${TLTokens.lineHeightMedium};
  vertical-align: middle;
  max-width: 280px;
  padding: ${TLTokens.spacingStackXxxs} 0 ${TLTokens.spacingInlineXxs} 0;
  margin: 0;
`;

export const P = styled.p`
  font-family: ${TLTokens.fontFamily02};
  font-weight: ${TLTokens.fontWeightRegular};
  font-size: ${TLTokens.fontSizeXs};
  color: ${TLTokens.colorNeutralMedium};
  line-height: ${TLTokens.lineHeightDistant};
  max-width: 488px;
  margin: 0;
    
  @media(max-width: 800px) {
    padding-right: ${TLTokens.spacingInlineXxxs};
  }
`;

export const Img = styled.img`
  max-height: 460px;
  margin-left: ${TLTokens.spacingInlineXxxs};
  
  @media(max-width: 700px) {
    padding-top: ${TLTokens.spacingStackSm};
    max-width: 250px;
    max-height: 250px;
    display: flex;
    align-content: center;
    margin: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  margin: 0;
  padding: ${TLTokens.spacingStackXxl} 0 0 0;

  li { 
    padding-right: ${TLTokens.spacingInlineXxxs}; 
    vertical-align: middle;
    cursor: pointer;
    
    img:hover {
      filter: saturate(0.5) brightness(0.565);
    }
  }
  
  @media(max-width: 800px) {
    padding: 40px 0 16px 0;
  }
`;
