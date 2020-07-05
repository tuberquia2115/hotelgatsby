import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import Footer from './footer'
import useSeo from '../hooks/use-seo'

const Layout = (props) => {
    const seo = useSeo()
    const { fallbackSeo: { description, title } } = seo
    return (
        <>
            <Global
                styles={css`
        
        html {
            font-size: 62.5%;
            box-sizing:border-box;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }
        body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: 'PT Serif', sans-serif;
        }
        h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
        }

        h1, h2 {
            font-family: 'Roboto', serif;
        }
        h3 {
            font-family: 'PT Serif', sans-serif;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        `}
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;1,700&family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet" />
            </Helmet>
            <Header />
            {props.children}
            <Footer title={title} />
        </>
    );
}

export default Layout;