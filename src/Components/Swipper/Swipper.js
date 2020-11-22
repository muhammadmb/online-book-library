import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import MiniBookCard from '../MiniBookCard/MiniBookCard';
import CatagoryCard from '../CatagoryCard/CatagoryCard';

const Swipper  = (props) =>{

    return  (
        <Swiper
            spaceBetween={100}
            slidesPerView={5}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
            <SwiperSlide>{props.BookCard ? <MiniBookCard/> : <CatagoryCard/>}</SwiperSlide>
        </Swiper>
    );

}
export default Swipper;