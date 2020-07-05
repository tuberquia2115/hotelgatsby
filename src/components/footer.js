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
        <footer css={css`
       background-color: #F25E7A;
       margin-top: 5rem;
       padding: 1rem;
       `}>
            <div
                css={css`
           max-width: 1200px;
           margin: 0 auto;

           @media (min-width: 768px){
               display: flex;
               align-items: center;
               justify-content: space-between;
           }
           `}
            >
                <Navegacion />

                <EnlaceHome to={'/'}>
                    <h1>Miranda</h1>
                </EnlaceHome>

            </div>
        </footer>
        <p css={css`
        text-align: center;
        color: #FFF;
        background-color: #D91A73;
        margin: 0;
        padding: 1rem;

        `}>
            {title}. Todos los derechos reservados {year} &copy;
        </p>
        </>
    );
}

export default Footer;