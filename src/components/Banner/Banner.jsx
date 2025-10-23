import React, { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

import logo from '../../assets/logo.png';

import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';
import slider5 from '../../assets/slider5.png';
import slider6 from '../../assets/slider6.png';
import slider7 from '../../assets/slider7.png';
import slider8 from '../../assets/slider8.png';
import slider9 from '../../assets/slider9.png';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper rounded-2xl"
            >
                <SwiperSlide className='rounded-2xl'>
                    <div className="bg-cover bg-center text-white p-10 rounded-2xl"
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slider1})` }}>
                        <div className='w-32 mb-6 mx-auto'><img className='' src={logo} alt="" /></div>
                        <h1 className='text-white font-bold text-3xl lg:text-5xl'>Bring Nature Home</h1>
                        <p className='my-5'>Learn, nurture, and watch your plants thrive every season.</p>
                        <p className='text-center hidden lg:block'>PlantHub ensures excellence in both design and functionality. You can explore, purchase, and care for your favorite indoor plants with ease. Our platform combines creativity and technology to provide a seamless experience,  helping you bring nature’s beauty into your home effortlessly.</p>
                        <button className='btn bg-green-800 text-white border-none mt-5 hover:bg-green-500'>Explore more</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-2xl'>
                    <div className="bg-cover bg-center text-white p-10 rounded-2xl"
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slider2})` }}>
                        <div className='w-32 mb-6 mx-auto'><img className='' src={logo} alt="" /></div>
                        <h1 className='text-white font-bold text-3xl lg:text-5xl'>Bring Nature Home</h1>
                        <p className='my-5'>Learn, nurture, and watch your plants thrive every season.</p>
                        <p className='text-center hidden lg:block'>PlantHub ensures excellence in both design and functionality. You can explore, purchase, and care for your favorite indoor plants with ease. Our platform combines creativity and technology to provide a seamless experience,  helping you bring nature’s beauty into your home effortlessly.</p>
                        <button className='btn bg-green-800 text-white border-none mt-5 hover:bg-green-500'>Explore more</button>
                    </div>
                </SwiperSlide>



                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;