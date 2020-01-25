import React from 'react'
import { StaffMember as StaffMemberType } from '../definitions/index'
import StaffMember from './StaffMember'
import { getStaffId } from '../services/StaffService'

interface StaffSearchResults {
  searchResults: StaffMemberType[]
}

export default (props: StaffSearchResults) => {
  return (
    <>
      {props.searchResults.map(staffMember => {
        return (
          <StaffMember
            key={getStaffId(staffMember)}
            staffMember={staffMember}
          />
        )
      })}
    </>
  )
}
