/* eslint-disable no-restricted-globals */
import React from 'react';
// eslint-disable-next-line
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from '../../build/swiper.esm';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from '../../build/react/swiper-react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const App = () => {
  return (
    <main>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        loop
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default App;
