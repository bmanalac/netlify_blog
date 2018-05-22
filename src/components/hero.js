import React from 'react'
import styled from 'styled-components'

const HeroStyled = styled.div`
  border: 1px solid black;
  padding: 1rem;
`

const Hero = () => (
  <HeroStyled>
    <h1>This is the hero component</h1>
  </HeroStyled>
)

export default Hero
