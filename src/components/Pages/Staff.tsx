import React from 'react'
import NotFound from './NotFound'
import { getStaffMemberFromId } from '../../services/StaffService'
import StaffAvatar from '../StaffAvatar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface StaffProps {
  match: {
    params: {
      id: string
    }
  }
}

export default function(props: StaffProps) {
  const id = props.match.params.id
  const staffMember = getStaffMemberFromId(id)

  if (!staffMember) {
    return <NotFound />
  }

  const AvatarContainer = styled.div`
    text-align: 'center';
    margin: 0 auto;
    width: 330px;
    height: auto;
  `

  const Body = styled.div`
    text-align: center;
  `

  const Name = styled.h1`
    color: '#777';
    font-size: 2.5em;
    text-align: center;
    font-weight: bold;
    width: 100%;
  `

  const Job = styled.h1`
    font-size: 1.5em;
    color: ${staffMember.department.background};
    font-weight: boldest;
  `

  return (
    <>
      <Link to="/">Back</Link>
      <AvatarContainer>
        <StaffAvatar staffMember={staffMember} size={300} />
      </AvatarContainer>
      <Body>
        <Name>{`${staffMember.firstname} ${staffMember.surname}`}</Name>
        <Job>{`${staffMember.job}`}</Job>
      </Body>
    </>
  )
}
