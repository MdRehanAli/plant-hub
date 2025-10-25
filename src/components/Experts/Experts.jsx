import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Experts.css';

const Experts = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 pt-10'>
            <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>Meet Our Plant Experts</h1>
            <p className='text-center text-green-800 mt-5'>Our team of plant enthusiasts and certified horticulturists are here to help your greens thrive.</p>


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
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/8B7p04B/5.png" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Richard Hang</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Herbal Plants & Aromatics Expert</p>
                        <p className='text-green-900 text-center text-sm'>Milan, Italy</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/10HLzGp/4.png" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Hans Porro</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Plant Nutrition Specialist</p>
                        <p className='text-green-900 text-center text-sm'>Adelade, Australia</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/nDLhHBy/6.png" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Leafy Thompson</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Indoor Gardening Expert</p>
                        <p className='text-green-900 text-center text-sm'>New York, USA</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/ZTMkr6X/aiony.jpg" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Ms. Ivy Bloom</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Flowering Plants Specialist</p>
                        <p className='text-green-900 text-center text-sm'>Hedingly, UK</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/7JpWfNM/2.png" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Dr. Fern Woods</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Houseplant Care Expert</p>
                        <p className='text-green-900 text-center text-sm'>Manchester, UK</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/QJyT5C8/3.png" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Mr. Oakley Roots</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Soil & Fertilization Specialist</p>
                        <p className='text-green-900 text-center text-sm'>Florida, USA</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/p2wwqVc/1.png" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Ms. Daisy Petal</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Succulent & Cactus Expert</p>
                        <p className='text-green-900 text-center text-sm'>Madrid, Spain</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                        <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/SDtJCzM7/yam.jpg" alt="" />
                        <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Dr. Sage Garden</h1>
                        <p className='text-green-600 my-1 text-lg text-center'>Organic Gardening Consultant</p>
                        <p className='text-green-900 text-center text-sm'>Paris, France</p>
                    </div>
                </SwiperSlide>
                    <SwiperSlide>
                        <div className='px-12 pt-3 pb-1 rounded-2xl bg-green-200'>
                            <img className='max-w-[200px] mx-auto rounded-2xl' src="https://i.ibb.co.com/xqHF96vM/tom.jpg" alt="" />
                            <h1 className='text-2xl font-semibold text-center text-green-950 mt-5'>Richard Ralf</h1>
                            <p className='text-green-600 my-1 text-lg text-center'>Indoor Air-Purifying Plants Specialistt</p>
                            <p className='text-green-900 text-center text-sm'>London, UK</p>
                        </div>
                    </SwiperSlide>
                
            </Swiper>


        </div>
    );
};

export default Experts;