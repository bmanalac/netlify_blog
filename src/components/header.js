import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
`

const HeaderLogoContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    > h1 {
        margin: 0;
    }
`

const LinkStyled = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 5px;
`

const Header = ({ siteTitle, links }) => (
  <HeaderContainer id="header-container">
    <HeaderLogoContainer>
      <h1>
        <LinkStyled to="/">
          {siteTitle}
        </LinkStyled>
      </h1>
      {Object.entries(links).map(link => (
        <LinkStyled key={link} to={link[1]}>
          {link[0].charAt(0).toUpperCase() + link[0].substring(1)}
        </LinkStyled>
      ))}
    </HeaderLogoContainer>
  </HeaderContainer>
)

export default Header
