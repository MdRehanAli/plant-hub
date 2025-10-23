import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Experts.css';

const Experts = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold text-green-950'>Meet Our Plant Experts</h1>
            <p className='text-center text-green-800 mt-5 mb-16'>Our team of plant enthusiasts and certified horticulturists are here to help your greens thrive.</p>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='p-10 rounded-2xl bg-green-200'>
                        {/* <img src={} alt="" /> */}
                        <h1 className='text-2xl font-semibold text-center text-green-950'>Garden Design</h1>
                        <p className='text-justify text-green-900 my-3 text-lg'>Imagine stepping into your own private oasis, a garden designed just for you, where every plant, path, and stone tells your story.</p>
                        <div className='flex justify-between items-center text-lg'>
                            <p className='text-green-500'>Care Rating:</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card shadow-sm">
                        <figure className="">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Experts;