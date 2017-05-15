import React from 'react'
import Select from "./elements/Select"

const FilterSelect = ({onChange, categories}) => {
  return (
    <Select onChange={onChange} options={categories} />
  )
}


export default FilterSelect
