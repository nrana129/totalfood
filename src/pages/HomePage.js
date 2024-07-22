import React, { useEffect } from 'react';
import ShopByCategories from "../components/HomePage/ShopByCategories/ShopByCategories";
import Carousel from "../components/HomePage/BannerCarousel/Carousel";
import TrendingDelights from "../components/HomePage/TrendingDelights/TrendingDelights";
import TotalClubBanner from "../components/HomePage/TotalClubBanner/TotalClubBanner";
import MustTry from "../components/HomePage/MustTry/MustTry";
import SafetyGuranteed from "../components/HomePage/SafetyGuranteed/SafetyGuranteed";
import Testimonial from "../components/HomePage/Testimonial/Testimonial";
import GetUptoBanner from "../components/HomePage/GetUptoBanner/GetUptoBanner";
import FoodVideo from "../components/HomePage/FoodVideo/FoodVideo";
import JoinOurTeam from "../components/HomePage/JoinOurTeam/JoinOurTeam";
import ProductTab from "../components/HomePage/ProductTab/ProductTab";

const HomePage = () => {

  return (
    <div>
      <Carousel />
      <ShopByCategories />
      <ProductTab />
      <TrendingDelights />
      <TotalClubBanner />
      <MustTry />
      <GetUptoBanner />
      <SafetyGuranteed />
      <FoodVideo />
      <Testimonial />
      <JoinOurTeam />
    </div>
  );
};

export default HomePage;
