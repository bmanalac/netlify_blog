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
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <h1>
        <LinkStyled to="/">
          {siteTitle}
        </LinkStyled>
      </h1>

    </HeaderLogoContainer>
  </HeaderContainer>
)

export default Header
