"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Album = ({item}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      loop
    >
        {
            item.images.map((item, key) => {
                return (
                    <SwiperSlide key={key}>
                        <div className="slide-container">
                          <img className="slide-image" src={item.url} alt={`slide-${key}`} />
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default Album