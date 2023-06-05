// import React, { useState, useEffect } from 'react'
// import './BuyProperty.css'
// import axios from '../../helpers/axios'
// import PropertyCard from '../../components/property-card/PropertyCard'
// import { Typography } from '@mui/material'

// const BuyProperty = () => {

//   //get property data from backend
//   // eslint-disable-next-line
//   const [list, setList] = useState([])

//   // const token = localStorage.getItem('token')
//   const getpropertylist = async () => {
//     try {
//       const response = await axios.get('/buy-property')
//       // console.log('buy response',response.data)
//       setList(response.data.buyproperyList)
//     }
//     catch (err) { console.log(err) }
//   }



//   useEffect(() => {
//     getpropertylist();
//     // eslint-disable-next-line
//   }, [])
//   //function to get property data from backend completed



//   return (
//     <>
//       <div className='buyProperty-header'>
//         <Typography className='search-results'>Search Results<span>{list.length}</span></Typography>
//       </div>
//       <div className='buy-card-wrapper'>
//         {(list.length <= 0) ? (<h1 style={{ opacity: '0.3', marginLeft: '3rem' }}>NO DATA FOUND</h1>) :
//           (list.map((card) => {
//           return (
//               <PropertyCard card={card} key={card._id} />
//           )
//       }))
//         }
//       </div>
//     </>
//   )
// }

// export default BuyProperty