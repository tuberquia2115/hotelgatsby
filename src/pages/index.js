import React from "react"
import Layout from "../components/layout"
import ImagenInicio from "../components/imagenInicio"
import ContenidoInicio from "../components/contenidoInicio"
import usePasteles from "../hooks/use-Pasteles"
import { css } from '@emotion/core'
import PastelPreview from "../components/PastelPreview"
import styled from '@emotion/styled'

const ListadoPasteles = styled.ul`
max-width: 1200px;
width: 95%;
margin: 4rem auto 0 auto;

@media (min-width: 768px){
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
}

`



const IndexPage = () => {
  const pasteles = usePasteles();
  console.log('Pasteles:', pasteles)
  return (
    <Layout>
      <ImagenInicio />
      <ContenidoInicio />

      <h2 css={css`
      text-align: center;
      margin-top: 5rem;
      font-size: 3rem;
      `}>
        Nuestros Diseños
      </h2>

      <ListadoPasteles>
        {pasteles.map(pastel => (
          <PastelPreview
            key={pastel.id}
            pastel={pastel} />
        ))}
      </ListadoPasteles>
    </Layout>
  )
}

export default IndexPage
