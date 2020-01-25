import React from 'react'
import styled from 'styled-components'
import { StaffMember } from '../definitions/index'
import { getStaffId } from '../services/StaffService'
import StaffAvatar from './StaffAvatar'
import { Link } from 'react-router-dom'

interface StaffMemberProps {
  staffMember: StaffMember
}

const Name = styled.span`
  display: block;
  font-weight: bold;
`

const DepartmentName = styled.span`
  display: block;
  font-size: 0.9em;
`

const StaffMemberContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin: 5px;
  border-radius: 6px;
  padding-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.4);

  :hover {
    background-color: rgba(0, 0, 0, 0.45);
  }
`

export default ({ staffMember }: StaffMemberProps) => {
  const fontColour = staffMember.job.department.fontColour || '#fff'

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
        <StaffAvatar staffMember={staffMember} size={200} radius={'6px'} />
        <Banner>
          <Name>{fullName}</Name>
          <DepartmentName>{staffMember.job.title}</DepartmentName>
        </Banner>
      </Link>
    </StaffMemberContainer>
  )
}
