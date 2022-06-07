import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    @font-face {
        font-family: 'NEXON Lv1 Gothic OTF';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'MaplestoryOTFLight';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv1 Gothic OTF Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    html{
        font-size: 12px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body{
        width: 100%;
        margin: 0px;
        padding: 0px;
        font-size: 1rem;
        font-family: 'NEXON Lv1 Gothic OTF';
        color: #000;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #__next{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    .FeedLeftBtn{
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(calc(-100% + 12px));
        z-index: 9999;
        background-color: white;
        opacity: 0.8;
        padding: 6px;
        border-radius: 50%;
        cursor: pointer;
    }
    .FeedRightBtn{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(calc(-100% + 12px));
        z-index: 9999;
        background-color: white;
        opacity: 0.8;
        padding: 6px;
        border-radius: 50%;
        cursor: pointer;
    }
    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;