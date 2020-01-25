import React from 'react'
import { Input } from 'semantic-ui-react'

interface SearchProps {
  onSearch: (searchValue: string) => void
}

export default (props: SearchProps) => {
  return (
    <Input
      icon="users"
      fluid
      autoFocus
      iconPosition="left"
      placeholder="Search staff..."
      onChange={e => {
        props.onSearch(e.target.value)
      }}
    />
  )
}
