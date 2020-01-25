import React from 'react'
import styled from 'styled-components'
import { StaffMember } from '../definitions/index'
import { getStaffId } from '../services/StaffService'
import StaffAvatar from './StaffAvatar'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

interface StaffMemberProps {
  staffMember: StaffMember
}

const StaffMemberContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin: ${isMobile ? '4px' : '6px'};
  border-radius: 6px;
  padding-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.4);
`

const Name = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1em;
`

const DepartmentName = styled.span`
  display: block;
  font-size: 0.9em;
`

export default ({ staffMember }: StaffMemberProps) => {
  const fontColour = staffMember.job.department.fontColour || '#fff'
  const avatarSize = isMobile ? 140 : 200

  const Banner = styled.div`
    background-color: ${staffMember.job.department.background};
    padding-top: 5px;
    padding-bottom: 5px;
    color: ${fontColour};
    a {
      color: ${fontColour};
    }
  `
  const fullName = `${staffMember.firstname} ${staffMember.surname}`
  const id = getStaffId(staffMember)
  return (
    <StaffMemberContainer key={id}>
      <Link to={`/staff/${id}`}>
        <StaffAvatar
          staffMember={staffMember}
          size={avatarSize}
          radius={'6px'}
        />
        <Banner>
          <Name>{fullName}</Name>
          <DepartmentName>{staffMember.job.title}</DepartmentName>
        </Banner>
      </Link>
    </StaffMemberContainer>
  )
}
