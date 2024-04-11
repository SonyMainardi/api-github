import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        background: linear-gradient(to bottom, #B0C4DE, #696969);
        color: #FFFFFF;
    }
`;