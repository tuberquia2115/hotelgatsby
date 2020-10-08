import { graphql, useStaticQuery } from 'gatsby'

const usePasteles = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPastele{
          nodes{
            titulo
            id
            slug
            contenido
            imagen{
              fluid(maxWidth:1200, maxHeight: 600){
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }

    `)
  return data.allDatoCmsPastele.nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug,

  }))
}

export default usePasteles