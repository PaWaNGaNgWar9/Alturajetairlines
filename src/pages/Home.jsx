import { lazy, Suspense } from "react";
import Heroseciton from "../components/herosection";
import Flightssearch from "../components/flightsearch";
import Movingtext from "../components/movingtext";
import TrendingSection from "../components/TrendingSection";
import Tailor from "../components/tailor";
const Slidebar = lazy(() => import("../components/slidebar"));
const Offer = lazy(() => import("../components/offer"));
const LoyaltyCard = lazy(() => import("../components/loyaltycard"));
const PrivateJet = lazy(() => import("../components/privatejet"));
const NextTrip = lazy(() => import("../components/nexttrip"));
const SingleImage = lazy(() => import("../components/singleimage"));
const Footer = lazy(() => import("../components/Footer"));

function Home() {
  return (
    <Suspense fallback={<div className="text-center text-amber-300 font-medium py-20">Loading...</div>}>
      <Heroseciton />
      <Flightssearch />
      <Movingtext />
       <Slidebar />
      <TrendingSection />
      <Tailor />
      <Offer />
      <LoyaltyCard />
      <PrivateJet />
      <NextTrip />
      <SingleImage />
      <Footer />
    </Suspense>
  );
}

export default Home;
