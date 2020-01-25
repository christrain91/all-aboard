import React from 'react'
import * as departments from '../data/departments'
import _ from 'lodash'
import { StaffMember } from '../definitions/index'
import Department from './Department'

interface DepartmentListProps {
  staff: StaffMember[]
}

export default (props: DepartmentListProps) => {
  return (
    <>
      {_.map(departments, department => {
        const departmentStaff = getStaffForDepartment(
          department.id,
          props.staff
        )
        return (
          <Department
            key={department.id}
            department={department}
            staff={departmentStaff}
          />
        )
      })}
    </>
  )
}

function getStaffForDepartment(
  id: number,
  allStaff: StaffMember[]
): StaffMember[] {
  return _.filter(allStaff, staff => {
    return staff.job.department.id === id
  })
}
