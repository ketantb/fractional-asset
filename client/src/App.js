import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import SignIn from './components/signin/Signin';
import Register from './components/registration/Registration';

import Home from './components/home/Home'
import AppNavbar from './components/app-bar/AppNavbar'


//forms
import ProductFormRoute from './components/product-forms/product-form-route';
import PropertyForm from './components/product-forms/property-form/PropertyForm'
import Yachtform from './components/product-forms/yacht-form/YachtForm'
import Carform from './components/product-forms/car-form/CarForm'
import Landform from './components/product-forms/land-form/LandForm'
import Jewelryform from './components/product-forms/jewelry-form/JewelryForm'
import Artform from './components/product-forms/art-form/ArtForm'


//products landing pages
import PropertyPage from './components/products-landingPages/property/Property';


// products details page


//website details
import AboutUs from './components/website-details/aboutus/AboutUs'
import FAQs from './components/website-details/FaqPage/FAQs'
import EnquirySection from './components/website-details/enquiryContactSection/EnquirySection'
import HowItWorks from './components/website-details/how-it-works/HowItWorks';

import Footer from './components/footer/Footer'
import MyProperty from './components/my-profile-section/my-property/MyProperty';




function App() {
  const [auth, setAuth] = useState('')
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AppNavbar auth={auth} setAuth={setAuth} />
      <div className='component-wraps'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/register' element={<Register />}></Route>


          {/*    
        <Route path='/my-property' element={<MyProperty />}></Route>
        <Route path='/buy-property' element={<BuyProperty />}></Route>
        <Route path='/rent-property' element={<RentProperty />}></Route>
        <Route path='/property-details/:id' element={<ViewDetails />} />
        <Route path='/city/:city' element={<CityPropertyList />} /> */}



          {/* Product Form Routes */}
          {/* <Route element={<ProductFormRoute />}> */}
          <Route path='/property-form' element={<PropertyForm />}></Route>
          <Route path='/yacht-form' element={<Yachtform />}></Route>
          <Route path='/car-form' element={<Carform />}></Route>
          <Route path='/art-form' element={<Artform />}></Route>
          <Route path='/jewelry-form' element={<Jewelryform />}></Route>
          <Route path='/land-form' element={<Landform />}></Route>
          {/* </Route> */}
          {/* Product Form Routes end*/}


          {/* landing pages */}
          <Route path='/property-page' element={<PropertyPage />}></Route>

          {/* landing pages  end*/}


          {/* my profile page roues */}
          <Route path='/my-property' element={<MyProperty />}></Route>
          {/* my profile page routes end */}

          {/*footer componenets */}
          <Route path="/enquiry" element={<EnquirySection />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;





