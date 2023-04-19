import { css } from "@emotion/react";

const globalStyle = css`
  html {
    font-size: 16px;
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Pretendard";
    color: #2d2d2d;
    @font-face {
      font-family: Pretendard;
      src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot");
      src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot?#iefix")
          format("embedded-opentype"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff2")
          format("woff2"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff")
          format("woff"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.ttf")
          format("truetype");
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
    }
    @font-face {
      font-family: Pretendard;
      src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot");
      src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix")
          format("embedded-opentype"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2")
          format("woff2"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff")
          format("woff"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf")
          format("truetype");
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
    }
    @font-face {
      font-family: Pretendard;
      src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot");
      src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix")
          format("embedded-opentype"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2")
          format("woff2"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff")
          format("woff"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf")
          format("truetype");
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
    }
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    outline: none;
  }
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ol {
    margin: 0;
  }
  input {
    background: none;
    border: none;
    color: inherit;
    outline: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  address {
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }
`;

export default globalStyle;
