import React from 'react'
import NotFound from './NotFound'
import { getStaffMemberFromId } from '../../services/StaffService'
import StaffAvatar from '../StaffAvatar'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Button, Icon } from 'semantic-ui-react'

interface StaffProps {
  match: {
    params: {
      id: string
    }
  }
}

const Container = styled.div`
  padding: 5px;
`

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
  font-size: 1.7em;
  font-weight: boldest;
`

const JobDescription = styled.p`
  margin: 30px auto;
  text-align: left;
  padding: 15px;
  width: ${isMobile ? '90%' : '500px'};
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
`

export default function(props: StaffProps) {
  const id = props.match.params.id
  const staffMember = getStaffMemberFromId(id)
  const history = useHistory()

  if (!staffMember) {
    return <NotFound />
  }

  return (
    <Container>
      <Button icon labelPosition="left" onClick={() => history.push('/')}>
        Return to Staff List
        <Icon name="arrow left" />
      </Button>
      <AvatarContainer>
        <StaffAvatar staffMember={staffMember} size={300} />
      </AvatarContainer>
      <Body>
        <Name>{`${staffMember.firstname} ${staffMember.surname}`}</Name>
        <Job>{staffMember.job.title}</Job>
        <JobDescription>{staffMember.job.description}</JobDescription>
        <div></div>
      </Body>
    </Container>
  )
}
