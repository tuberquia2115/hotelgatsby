import React from 'react';
import { graphql } from 'gatsby'
import Layout from './layout';
import Image from 'gatsby-image'
import { css } from '@emotion/core'


export const query = graphql`
query($slug: String!) {
    allDatoCmsHabitacio(filter:{ slug: {eq: $slug}}) {
      nodes{
       titulo
        contenido
        imagen{
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
        }
        }
      }
    }
`
const HabitacionTemplate = ({ data: { allDatoCmsHabitacio: { nodes } } }) => {
    const { contenido, titulo, imagen } = nodes[0];
    return (
        <Layout>
            <main
                css={css`
            margin: 0 auto;
            width: 95%;
            max-width: 1200px;
            `}
            >
                <h1
                css={css`
                text-align: center;
                margin-top: 4rem;
                
                `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image
                    fluid={imagen.fluid}
                />
            </main>
        </Layout>
    );
}

export default HabitacionTemplate;