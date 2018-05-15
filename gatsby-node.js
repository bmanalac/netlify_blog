/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ 
  boundActionCreators, 
  graphql, 
}) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              templateKey
              title
              tags
              date
            }
          }
        }
      }
    }
  `)
    .then((res) => {
      if (res.errors) {
        res.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(res.errors)
      }

      const posts = res.data.allMarkdownRemark.edges

      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          tags: node.frontmatter.tags,
          component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
          // additional data can be passed via context
          context: {
            id: node.id,
          },
        })
      })
    })
}
