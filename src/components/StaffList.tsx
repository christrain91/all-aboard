import React from 'react'
import styled from 'styled-components'
import StaffAvatar from './StaffAvatar'
import { Link } from 'react-router-dom'
import { StaffMember } from '../definitions/index'
import { getStaffId } from '../services/StaffService'

interface StaffListProps {
  staff: StaffMember[]
}

export default (props: StaffListProps) => {
  const Container = styled.div`
    text-align: 'center';
    margin: 0 auto;
    width: 70%;
    font-weight: normal;
  `

  const StaffMemberContainer = styled.div`
    display: inline-block;
    width: 150px;
    text-align: center;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  `

  return (
    <Container>
      {props.staff.map(staffMember => {
        const fullName = `${staffMember.firstname} ${staffMember.surname}`
        const id = getStaffId(staffMember)
        return (
          <StaffMemberContainer key={id}>
            <Link to={`/staff/${id}`}>
              <StaffAvatar staffMember={staffMember} />
              <h4>{fullName}</h4>
            </Link>
          </StaffMemberContainer>
        )
      })}
    </Container>
  )
}
