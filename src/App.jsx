import {lazy, Suspense} from 'react';
import Navbar from './components/navbar';
import Heroseciton from './components/herosection';
import Flightssearch from './components/flightsearch';
import Movingtext from './components/movingtext';
const Slidebar = lazy(() => import('./components/slidebar'));
import Trending from './components/trending'
const CardLayout = lazy(() => import('./components/cardlayout'));
const Offer = lazy(() => import('./components/offer'));
import Tailor from './components/tailor';
import NextTrip from './components/nexttrip';
import LoyaltyCard from './components/loyaltycard';
import PrivateJet from './components/privatejet';
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
      <Trending/>
      <CardLayout/>
        <Offer/>
        <Tailor/>
        <LoyaltyCard/>
        <PrivateJet/>
        <NextTrip/>
        <Footer/>
        </Suspense>
      </div>
    </>
  )
}

export default App;
