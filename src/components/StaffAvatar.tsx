import React, { useState } from 'react'
import styled from 'styled-components'
import { getStaffId } from '../services/StaffService'
import { StaffMember } from '../definitions/index'

interface StaffAvatarProps {
  staffMember: StaffMember
  size?: number
}

export default (props: StaffAvatarProps) => {
  const [src, setSrc] = useState(`/staff/${getStaffId(props.staffMember)}.jpg`)

  const size = props.size || 100
  const Avatar = styled.img`
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
    display: inline-block;
    margin: 10px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 10px #999;
  `

  const fullName = `${props.staffMember.firstname} ${props.staffMember.surname}`

  return (
    <Avatar
      src={src}
      title={fullName}
      onError={() => setSrc('/NoAvatar.jpg')}
    />
  )
}
