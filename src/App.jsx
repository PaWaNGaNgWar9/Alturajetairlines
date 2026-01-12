import {lazy, Suspense} from 'react';
import Navbar from './components/navbar';
const Heroseciton = lazy(()=>import('./components/herosection'))
import Flightssearch from './components/flightsearch';
import Movingtext from './components/movingtext';
const Slidebar = lazy(() => import('./components/slidebar'));
import TrendingSection from "./components/TrendingSection";
const Offer = lazy(() => import('./components/offer'));
import Tailor from './components/tailor';
import NextTrip from './components/nexttrip';
import LoyaltyCard from './components/loyaltycard';
import PrivateJet from './components/privatejet';
import SingleImage from './components/singleimage';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <>
      <div>
        
        <Navbar/>
        <Heroseciton/>
        <Flightssearch/>
        <Movingtext/>
         <Suspense>
         <Slidebar/>
         <TrendingSection/>
         <Offer/>
         <Tailor/>
         <LoyaltyCard/>
         <PrivateJet/>
         <NextTrip/>
         <SingleImage/>
         <Footer/>
        </Suspense>
      </div>
    </>
  )
}

export default App;
