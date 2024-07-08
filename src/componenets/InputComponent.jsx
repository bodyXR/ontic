import { TextField } from '@mui/material'
import React from 'react'

const InputComponent = ({placeholder,label}) => {
  return (
    <TextField placeholder={placeholder} sx={{bgcolor:'#F8F8F8'}} variant='standard' label={label}/>
  )
}

export default InputComponent
