import React, { useState } from 'react'
import staffData from '../../data/staff'
import StaffList from '../StaffList'
import SearchBar from '../SearchBar'
import { StaffMember } from '../../definitions/index'
import styled from 'styled-components'
import _ from 'lodash'

const SearchContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-bottom: 10px;
`

export default function() {
  const [hasSearch, setHasSearch] = useState(false)
  const [staff, setStaff] = useState(staffData)
  return (
    <>
      <SearchContainer>
        <SearchBar
          onSearch={search => {
            setHasSearch(!!search)
            setStaff(filterStaff(staffData, search))
          }}
        />
      </SearchContainer>
      <StaffList staff={staff} showSearchResults={hasSearch} />
    </>
  )
}

function filterStaff(staffData: StaffMember[], search: string): StaffMember[] {
  search = _.trim(search.toLowerCase())

  if (!search) {
    return staffData
  }

  return _.filter(staffData, staffMember => {
    const searchIndex = getSearchIndexForStaffMember(staffMember)
    return !!_.find(searchIndex, indexItem => _.includes(indexItem, search))
  })
}

function getSearchIndexForStaffMember(staffMember: StaffMember): String[] {
  const paths = [
    'firstname',
    'surname',
    'department.title',
    'job.title',
    'nicknames'
  ]
  const values: string[][] = _.map(paths, path => {
    let value = _.get(staffMember, path) || ''
    if (!_.isArray(value)) {
      value = [value]
    }
    return _.map(value, str => str.toLowerCase())
  })

  return _.flatten(values)
}
