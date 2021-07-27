import { PropTypes } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './ui/Header';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'HeadingCursive';
    src: url('../assets/fonts/LaBelleAurore-Regular.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'HeadingReg';
    src: url('../assets/fonts/JuliusSansOne-Regular.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Body';
    src: url('../assets/fonts/Raleway-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BodyBold';
    src: url('../assets/fonts/Raleway-SemiBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'BodyLight';
    src: url('../assets/fonts/Raleway-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  html {
    --black: #2E2E2E;
    --white: #fff;
    --bg: #fff5f4;
    --rust: #cd6647;
    --pale-green: #c4d0cc;
    --pink: #fee5e0;
    --green: #718878;
    --grey: #707070;
    --pale-green-alpha: rgba(196, 208, 204, 0.5);
    --pink-alpha: rgba(254, 229, 224, 0.5);
    --maxWidth: 1800px;
    box-sizing: border-box;
    font-size: 62.5%;
    background: var(--bg);
  }
  *, *::before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    background: var(--pink);
    color: black;
    border: 2px solid var(--green);
    padding: 0.6rem 1rem;
    border-radius: 2.5rem;
    box-shadow: 0px 0px 8px 1px var(--black);
    cursor: pointer;
    transition: all 0.2s;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
