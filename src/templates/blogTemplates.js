import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// styled components
const BlogPostContainer = styled.div`
  color: black;
`

const BlogPost = styled.div`
  border: 1px solid #000; 
`

export default function Template({ 
  data, 
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <BlogPostContainer>
      <BlogPost>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPost>
    </BlogPostContainer>
  )
}

Template.defaultProps = {
  data: PropTypes.object,
}

// graphql query fetch
export const postQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYYThh:mm:ss")
        title
        tags
      }
    }
  }
`
