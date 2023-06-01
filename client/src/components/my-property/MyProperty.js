import React, { useState, useEffect} from 'react'
import './MyProperty.css'
import axios from '../../helpers/axios'
import MyCard from '../my-card/MyCard'
import { Button, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'



const MyProperty = () => {
const navigate=useNavigate()

  const [selected, setSelected] = useState(true)
  //get property data from backend
  // eslint-disable-next-line
  const [list, setList] = useState([])

  const token = localStorage.getItem('token')
  const getpropertylist = async () => {
    try {
      const response = await axios.get('/listing-my-product', {
        headers: {
          authorization: token
        }
      })
    if(response.data.success){
        // console.log(response.data.list)
        setList(response.data.list)
    }
    else{
        console.log('NO DATA FOUND')
    }
    }
    catch (err) { console.log(err) }
  }

  useEffect(() => {
    getpropertylist();
    // eslint-disable-next-line
  }, [])
  //function to get property data from backend completed




  return (
    <>
      <div className='myProperty-header' style={{display:'flex', justifyContent:'space-between'}}>
        <Typography className='search-reults'>Search Results<span>{list.length}</span></Typography>
        <Button style={{cursor:'pointer'}} className='post-property'
        onClick={(()=>navigate('/property-form'))}>POST PROPERTY</Button>
      </div>
      <div className='my-card-wrapper'>
        {(list.length <= 0) ? (<h1 style={{ opacity: '0.3', marginLeft: '3rem' }}>NO DATA FOUND</h1>) :
          (list.map((mycard) => {
            return (
              <MyCard key={mycard._id}   mycard={mycard} selected={selected} setSelected={setSelected}
              list={list} getpropertylist={getpropertylist}  />
            )
          }))
        }
      </div>
    </>
  )
}

export default MyProperty