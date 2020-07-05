import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
height: 700px;

`


const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.75), rgba(34,49,63,.75));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 4rem;
        margin: 0;

        @media (min-width: 992px){
            font-size:  5.8rem;
        }
    }

    p {
        font-size: 2rem;

        @media(min-width: 992px){
            font-size:  2.6rem;
        }
    }
`
const ImagenHotel = () => {
    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath:{eq:"fondo.jpg"}) {
          sharp: childImageSharp{
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    return (
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                <h1>Bienvenido  a Pastelería Miranda</h1>
                <p>No solo los ingredientes hacen rico a un pastel,
                    el amor con que se hace le da un toque especial.</p>
            </TextoImagen>
        </ImageBackground>
    );
}

export default ImagenHotel;