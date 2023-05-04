import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  // function handleChange(e){
  //   setInputValue(e.target.value)
  // }
  return (
    <Paper
      component='form'
      onSubmit={() => { }}
      sx={{ borderRadius: 20, border: '1px solid #e3e3e3', boxShadow: 'none', pl: 2, mr: { sm: 5 } }}>
      <input
        className="search-bar"
        placeholder='search...'
        value=''
        onChange={(e) => setInputValue(e.target.value)}
        style={{ outline: 'none', border: 'none' }}

      />
      <IconButton
        type='submit'
        sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
