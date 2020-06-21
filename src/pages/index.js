import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"



const IndexPage = () => (
  <Layout>
    <ImagenHotel/>
    <ContenidoInicio/>
  </Layout>
)

export default IndexPage
