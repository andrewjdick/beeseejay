import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "media.js";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'MarkOffc';
    src: local('MarkOffc'), url(./assets/fonts/MarkOffc.ttf) format('ttf');
  }

  * {
    box-sizing: border-box;
    font-family: 'MarkOffc', sans-serif;
  }

  html {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }
  
  body, div#root {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
		font-weight: 400;
    font-size: 1rem;
		line-height: 1.2rem;
    
    ${media.tablet`
		  font-weight: 400;
      font-size: 1.2rem;
		  line-height: 1.6rem;
    `}
  }

`;

export const AppWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #333f48;
`;
