import React from 'react'
import styled from 'styled-components'
import { StaffMember } from '../definitions'
import StaffSearchResults from './StaffSearchResults'
import DepartmentList from './DepartmentList'

interface StaffListProps {
  staff: StaffMember[]
  showSearchResults: boolean
}

const Container = styled.div`
  text-align: 'center';
  margin: 0 auto;
  width: 90%;
  padding-left: 10px;
  font-weight: normal;
`

export default (props: StaffListProps) => {
  return (
    <Container>
      {props.showSearchResults ? (
        <StaffSearchResults searchResults={props.staff} />
      ) : (
        <DepartmentList staff={props.staff} />
      )}
    </Container>
  )
}
