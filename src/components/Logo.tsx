import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: block;
`

export default () => {
  return <Logo src="/InGenLogo.png" />
}
