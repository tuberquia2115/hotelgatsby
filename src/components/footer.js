import React from 'react';
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Navegacion from './nav';

const EnlaceHome = styled(Link)`
color: #FFF;
text-align: center;
text-decoration: none;
`
const Footer = ({title}) => {
    const year = new Date().getFullYear()
    return (
        <>
        <footer >
        <p css={css`
                text-align: center;
                color: #FFF;
                background-color: #f2a9aa;
                margin: 0;
                padding: 2rem;

        `}>
            {title}. Todos los derechos reservados {year} Copyright &copy;
        </p>
        </footer>
        </>
    );
}

export default Footer;