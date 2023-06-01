import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from '../../helpers/axios'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'
import HomePropertyList from '../home-property-list/HomePropertyList'
import HomePagination from '../pagination/Pagination'
import WhyUs from '../why-us/WhyUs'
import AboutUs from '../aboutus/AboutUs'
import AssetContainer from '../Asset-Container/asset-container'

const Home = () => {
  const navigate = useNavigate()

  const [city, setCity] = useState('')
  const [list, setList] = useState([])

  //for pagination
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line 
  const [postPerPage, setPostPerPage] = useState(4)
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentList = list.slice(firstPostIndex, lastPostIndex)
  //pagination ends

  // const token = localStorage.getItem('token')
  const getpropertylist = async () => {
    try {
      const response = await axios.get('/listing-all-product')
      if (response.data.success) {
        console.log('list', response.data.list[0].images)
        // response.data.list[0].images[1])
        setList(response.data.list)
      }
      else {
        console.log(response)
      }
    }
    catch (err) { console.log(err) }
  }

  useEffect(() => {
    getpropertylist();
    // eslint-disable-next-line
  }, [])




  //HANDLE SEARCH
  const handleSearch = () => {
    console.log(city)
    navigate(`/city/${city}`)
  }

  return (
    <div className='home-wrapper'>
      {/* background image */}
      <div className="bg-image">
        <div className="container">
          <div className="row">
            <div className='bgwrapper'></div>
            <div className="col-md-8 offset-md-2 text-center" id="main-section">
              <Typography className='banner-title'>
                Smart Way To Own A Holiday Home
                <br />
                Own a luxury holiday home for a fraction of the total cost
              </Typography>

              <div className="input-group mb-3" style={{ marginTop: '2rem' }}>
                <input type="text" className="form-control" placeholder="Search city"
                  aria-label="Search city" aria-describedby="button-addon2"
                  name='city' value={city} onChange={e => setCity(e.target.value)} />
                <Button className="btn btn-outline-secondary" type="button"
                  id="button-addon2" style={{ backgroundColor: '#24A148', color: 'white' }}
                  onClick={handleSearch}>Search</Button>
              </div>
              <div className='know-more-btn' style={{ marginTop: '1rem' }}>
                <Button className='btn' onClick={()=>{navigate('/enquiry')}}>
                  Get In Touch With Us To Know More
                </Button>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* background image ends */}

      {/* <div className='home-property-card-wrapper'> */}
        {/* property listings */}
        {/* <HomePropertyList currentList={currentList} />
        <HomePagination totalPosts={list.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
      </div> */}
      {/* property listings ends */}

      <AssetContainer/>

      {/*  */}
      <WhyUs />
      <AboutUs/>
    </div>
  )
}

export default Home