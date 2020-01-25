import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

const logoSize = isMobile ? 100 : 200

const Logo = styled.img`
  width: ${logoSize}px;
  height: ${logoSize}px;
  margin: 0 auto;
  display: block;
`

export default () => {
  return <Logo src="/InGenLogo.png" />
}
