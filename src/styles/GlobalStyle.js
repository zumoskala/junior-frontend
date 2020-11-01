import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: TTCommons-Light;
    src: url('/fonts/TTCommons-Light.woff2') format('woff2'),
         url('/fonts/TTCommons-Light.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: TTCommons-Regular;
    src: url('/fonts/TTCommons-Regular.woff2') format('woff2'),
         url('/fonts/TTCommons-Regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: TTCommons-DemiBold;
    src: url('/fonts/TTCommons-DemiBold.woff2') format('woff2')
         url('/fonts/TTCommons-DemiBold.ttf') format('truetype');
    font-display: swap;
  }

  html {
    font-family: TTCommons-regular,sans-serif;
    font-size: 16px;
    overflow-x:hidden;
  }
`;
