import React from 'react'
import {
  Department,
  StaffMember as StaffMemberType
} from '../definitions/index'
import { getStaffId } from '../services/StaffService'
import StaffMember from './StaffMember'
import _ from 'lodash'
import styled from 'styled-components'

interface DepartmentProps {
  department: Department
  staff: StaffMemberType[]
}

export default (props: DepartmentProps) => {
  const sortedStaff = sortStaff(props.staff)

  const Container = styled.div`
    margin-bottom: 50px;
  `

  const Title = styled.div`
    background-color: ${props.department.background};
    height: auto;
    color: white;
    padding: 10px;
    font-weight: bold;
    width: auto;
    font-size: 1.7em;
    margin-bottom: 3px;
  `

  return (
    <Container>
      <Title>{props.department.title}</Title>
      {sortedStaff.map(staffMember => {
        return (
          <StaffMember
            key={getStaffId(staffMember)}
            staffMember={staffMember}
          />
        )
      })}
    </Container>
  )
}

function sortStaff(staff: StaffMemberType[]): StaffMemberType[] {
  const sortedStaff = _.orderBy(staff, member => {
    return member.job.displayOrder || 99
  })

  return sortedStaff
}
