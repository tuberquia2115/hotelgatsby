import { graphql, useStaticQuery } from 'gatsby'

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacio{
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
  return data.allDatoCmsHabitacio.nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug,

  }))
}

export default useHabitaciones