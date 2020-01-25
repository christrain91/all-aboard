import React from 'react'
import staff from '../../data/staff'
import StaffList from '../StaffList'

export default function() {
  return (
    <>
      <StaffList staff={staff} />
    </>
  )
}
