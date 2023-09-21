import { createGlobalStyle } from 'styled-components';

import PoppinsBlack from './Poppins-Black.ttf';
import PoppinsBlackItalic from './Poppins-BlackItalic.ttf';
import PoppinsLight from './Poppins-Light.ttf';
export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Font Name'), local('FontName'),
        url(${PoppinsLight}) format('woff2'),
        url(${PoppinsBlack}) format('woff2'),
        url(${PoppinsBlackItalic}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;