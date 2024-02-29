import React from 'react'
import TradingViewChart from '../Charts/TradingViewChart'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Tradingchart() {
  return (
    <>
    <Box sx={{fontSize:"20px" , m:5}}>
      <NavLink to={'/'}>
        go back
      </NavLink>
    </Box>
        <TradingViewChart/>
    </>
  )
}

export default Tradingchart