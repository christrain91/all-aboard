import React from 'react'
import { StaffMember as StaffMemberType } from '../definitions/index'
import StaffMember from './StaffMember'
import { getStaffId } from '../services/StaffService'
import _ from 'lodash'
import styled from 'styled-components'

interface StaffSearchResults {
  searchResults: StaffMemberType[]
}

const MagicWordContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  img {
    margin: 0 auto;
    width: 100%;
    max-width: 700px;
  }
`

export default (props: StaffSearchResults) => {
  return (
    <>
      {_.isEmpty(props.searchResults) ? (
        <MagicWordContainer>
          <img src="MagicWord.gif" alt="magic-word" />
        </MagicWordContainer>
      ) : (
        props.searchResults.map(staffMember => {
          return (
            <StaffMember
              key={getStaffId(staffMember)}
              staffMember={staffMember}
            />
          )
        })
      )}
    </>
  )
}
