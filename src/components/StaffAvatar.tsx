import React, { useState } from 'react'
import styled from 'styled-components'
import { getStaffId } from '../services/StaffService'
import { StaffMember } from '../definitions/index'

interface StaffAvatarProps {
  staffMember: StaffMember
  size?: number
  radius?: string
}

export default (props: StaffAvatarProps) => {
  const staffId = getStaffId(props.staffMember)
  const [src, setSrc] = useState(`/staff/${staffId}.jpg`)
  const [loaded, setLoaded] = useState(false)

  const size = props.size || 100
  const radius = props.radius || '100%'
  const Avatar = styled.img`
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    border-radius: ${radius};
    margin: 10px;
    box-shadow: 0 0 5px #777;
    opacity: ${loaded ? 1 : 0};
  `

  const fullName = `${props.staffMember.firstname} ${props.staffMember.surname}`

  return (
    <>
      <Avatar
        key={`avatar_${staffId}`}
        src={src}
        title={fullName}
        onError={() => setSrc('/NoAvatar.jpg')}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}
