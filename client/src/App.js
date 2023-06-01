import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/Landing-Page/landing-page';
import Home from './components/home/Home'
import AppNavbar from './components/app-bar/AppNavbar'
import SignIn from './components/signin/Signin';
import Register from './components/registration/Registration';
import PropertyForm from './components/property-form/PropertyForm'
import MyProperty from './components/my-property/MyProperty'
import BuyProperty from './components/buy-property/BuyProperty';
import RentProperty from './components/rent-property/RentProperty';
import ViewDetails from './components/view-details/ViewDetails'
import CityPropertyList from './components/city-property-list/CityPropertyList';
/*footer components */
import AboutUs from './components/aboutus/AboutUs';
import FAQs from './components/FaqPage/FAQs'
import EnquirySection from './components/enquiryContactSection/EnquirySection'
import HowItWorks from './components/how-it-works/HowItWorks';
// import HowItWorks from './components/how-it-works/HowItWorks';
import Footer from './components/footer/Footer'

function App() {
  const [auth, setAuth] = useState('')
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AppNavbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path='/landing-page' element={<LandingPage/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/property-form' element={<PropertyForm />}></Route>
        <Route path='/my-property' element={<MyProperty />}></Route>
        <Route path='/buy-property' element={<BuyProperty />}></Route>
        <Route path='/rent-property' element={<RentProperty />}></Route>
        <Route path='/property-details/:id' element={<ViewDetails />} />
        <Route path='/city/:city' element={<CityPropertyList />} />

        {/*footer componenets */}
        <Route path="/enquiry" element={<EnquirySection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
