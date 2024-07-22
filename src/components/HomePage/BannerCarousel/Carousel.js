import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerCarousel = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/banner-sliders",
          {
            method: "GET",
            headers: {
              "x-cors-api-key": "temp_efccee76b63a0822c956c81b6631296a",
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzIxMzkxNjgwLCJleHAiOjE3MjEzOTUyODB9.KV3NjeUDc0pYsAYRbhEdELKt375JaNrNsFOH9BmvZks",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const Bdata = await response.json();
        setBannerData(Bdata.data || []); // Ensure Bdata.data is an array or default to []
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error || !Array.isArray(bannerData) || bannerData.length === 0) {
    return <div>Error: No data available</div>; // Handle case where no data is available or error occurred
  }

  return (
    <div className="banner_carousel">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.2}
        centeredSlides={true}
        freeMode={true}
        centeredSlidesBounds={true}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        modules={[Navigation]}
      >
        {bannerData.map((data) => (
          <SwiperSlide key={data.banner_id}>
            <img
              src={data.image}
              alt={`Banner-${data.created_at}`}
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
