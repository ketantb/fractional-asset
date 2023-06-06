import React, { useState, useEffect } from 'react'
import './MyProperty.css'
import axios from '../../../helpers/axios'
import { useNavigate } from 'react-router-dom'
import FilterBox from '../filter-box/FilterBox'


const MyProperty = () => {

  return (
    <>
      <FilterBox />
    </>
  )

}

export default MyProperty