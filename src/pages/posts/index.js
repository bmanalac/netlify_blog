import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostLink = styled(Link)`
  border: 1px solid black;
  padding: 2rem 1rem;
  margin: 10px;
  text-decoration: none;
  color: black;
`

const PostPage = (data) => {
  const postsData = data.data.allMarkdownRemark.edges
  return (
    <div>
      {postsData.map((post) => {
        const { id, frontmatter } = post.node 
        return (
          <PostLink key={id} to={frontmatter.path}>
            <h1>{frontmatter.title}</h1>
            <h1>{frontmatter.date}</h1>
            <h6>{frontmatter.summary}</h6>
          </PostLink>
        ) 
      })}
    </div>
  )
}

PostPage.defaultProps = {
  query: PropTypes.object,
}

export default PostPage

// graphql query fetch
export const postQuery = graphql`
  query BlogPostByDate {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            category
            date(formatString: "MMMM DD, YYYY")
            summary
          }
        }
      }
    }
  }
`
