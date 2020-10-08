const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const bookTemplate = path.resolve("src/templates/bookTemplate.js")
  return graphql(`
    {
      allBook {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors
    }

    res.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: {bookId:book.node.id},
      })
    })
  })
}
