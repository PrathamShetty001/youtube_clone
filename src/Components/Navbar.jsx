import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/Constants'
import SearchBar from './SearchBar'

const Navbar = () =>(
    <Stack 
    direction="row"
    alignItems="center"
    sx={{position:'sticky', background:'black', top:'0', justifyContent:'space-between'}}>

      <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height='45'/>
      </Link>
      <SearchBar/>
    </Stack>
  )


export default Navbar
