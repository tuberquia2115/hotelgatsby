exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query {
        allDatoCmsHabitacio{
          nodes{
            slug
            }
          }
        }
    `);
    // console.log(resultado.data.allDatoCmsHabitacio.nodes)

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors)
    }

    // sí hay paginas crear los archivos

    const habitaciones = resultado.data.allDatoCmsHabitacio.nodes
    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    });
}