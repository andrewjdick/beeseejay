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
  }
  
  body, div#root {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
		font-weight: 400;
    font-size: 1rem;
		line-height: 1.2rem;
    overflow: hidden;
    
    ${media.tablet`
		  font-weight: 400;
      font-size: 1.2rem;
		  line-height: 1.6rem;
    `}
  }

`;

export const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #333f48;
`;
