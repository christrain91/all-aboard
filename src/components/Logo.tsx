import React from 'react'
import styled from 'styled-components'

export default () => {
  const Logo = styled.img`
    width: 200px;
    margin: 0 auto;
    display: block;
  `
  return <Logo src="/InGenLogo.png" />
}
