exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query {
        allDatoCmsPastele{
          nodes{
            slug
            }
          }
        }
    `);
    console.log(resultado.data.allDatoCmsPastele.nodes)

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors)
    }

    // sí hay paginas crear los archivos

    const Pasteles = resultado.data.allDatoCmsPastele.nodes
    Pasteles.forEach(pastel => {
        actions.createPage({
            path: pastel.slug,
            component: require.resolve('./src/components/Pasteles.js'),
            context: {
                slug: pastel.slug
            }
        })
    });
}