import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import { FreeMode, Pagination } from "swiper";
import './CardsSwiperStyle.css';

const CardsSwiper = ({
    items,
    renderItem,
    breakpoints = {
        1200: {
            slidesPerView: 5,
        },
        1000: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        }
    },
    spaceBetween = 20
}) => {

    return (
        <Swiper
            breakpoints={breakpoints}
            spaceBetween={spaceBetween}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {
                items?.map((item) => {
                    return (<SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>)
                })
            }
        </Swiper>
    )
}

export default CardsSwiper;