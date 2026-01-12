import React, { useState } from "react";
import {lazy, Suspense} from 'react';
import Trending from "./trending";
const CardLayout = lazy(()=>import('./cardlayout'))

const TrendingSection = () => {
  const [selectedCity, setSelectedCity] = useState("London");

  return (
    <>
      <Trending
        selected={selectedCity}
        setSelected={setSelectedCity}
      />
      <Suspense>
      <CardLayout selectedCity={selectedCity} />
      </Suspense>
    </>
  );
};

export default TrendingSection;
