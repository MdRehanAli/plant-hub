import React from 'react';

const PlantOfTheWeek = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-20 mb-10'>
            <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>Plants of The Week</h1>
            <p className='text-center text-green-800 mt-5'>Our weekly pick to help you grow your indoor paradise</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                <div className="card shadow-sm hover:hue-rotate-180 hover:scale-110 transition-transform duration-300">
                    <figure>
                        <img className=''
                            src="https://i.ibb.co.com/TDYqLrs8/aloe-vera.png"
                            alt="Plant" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center text-green-700">
                            Aloe Vera
                            <div className="badge bg-green-200 ml-2">Latest</div>
                        </h2>
                        <p className='text-justify text-green-800'>Aloe Vera is one of nature’s most versatile and beneficial indoor plants, prized for both its beauty and healing properties. Its fleshy, lance-shaped leaves contain a soothing gel rich in vitamins, minerals, and antioxidants. This gel has been used for centuries in skincare. As an indoor plant, Aloe Vera thrives in bright, indirect sunlight and requires minimal watering—typically once every two to three weeks.</p>
                        <div>
                            <h4 className="text-lg font-semibold text-green-700">Care Tips:</h4>
                            <ul className="list-disc list-inside text-green-400 space-y-1">
                                <li>Water every 2-3 weeks.</li>
                                <li>Tolerates low light.</li>
                                <li>Allow soil to dry between waterings.</li>
                            </ul>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge border-green-200 bg-transparent text-green-600">Iconic</div>
                            <div className="badge border-green-200 bg-transparent text-green-600">Cultured</div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-sm hover:hue-rotate-180 hover:scale-110 transition-transform duration-300">
                    <figure>
                        <img className=''
                            src="https://i.ibb.co.com/4ZTjv0GR/peace-lily.png"
                            alt="Plant" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center text-green-700">
                            Peace Lily
                            <div className="badge bg-green-200 ml-2">Stocked</div>
                        </h2>
                        <p className='text-justify text-green-800'>The Peace Lily is a graceful indoor flowering plant known for its lush, glossy green leaves and elegant white blooms that resemble delicate sails. More than just beautiful, it’s an exceptional natural air purifier that removes common household pollutants such as ammonia, benzene, and trichloroethylene. The Peace Lily thrives in low to medium light, making it perfect for offices and shaded corners of your home.</p>
                        <div>
                            <h4 className="text-lg font-semibold text-green-700">Care Tips:</h4>
                            <ul className="list-disc list-inside text-green-400 space-y-1">
                                <li>Water every 3-4 weeks.</li>
                                <li>Tolerates low light.</li>
                                <li>Allow soil to dry between waterings.</li>
                            </ul>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge border-green-200 bg-transparent text-green-600">Vintage</div>
                            <div className="badge border-green-200 bg-transparent text-green-600">Most Popular</div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-sm hover:hue-rotate-180 hover:scale-110 transition-transform duration-300">
                    <figure>
                        <img className=''
                            src="https://i.ibb.co.com/hRVHzRVG/snake-plant.png"
                            alt="Plant" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center text-green-700">
                            Snake Plant
                            <div className="badge bg-green-200 ml-2">NEW</div>
                        </h2>
                        <p className='text-justify text-green-800'>A hardy plant that purifies indoor air and thrives in low light, perfect for beginners. Known for its long, upright leaves with yellow edges, the Snake Plant not only looks elegant but also improves air quality by removing toxins such as formaldehyde and benzene. Ideal for bedrooms and offices, it requires minimal care and adds a natural modern vibe to any space.</p>
                        <div>
                            <h4 className="text-lg font-semibold text-green-700">Care Tips:</h4>
                            <ul className="list-disc list-inside text-green-400 space-y-1">
                                <li>Water every 2-3 weeks.</li>
                                <li>Tolerates low light.</li>
                                <li>Allow soil to dry between waterings.</li>
                            </ul>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge border-green-200 bg-transparent text-green-600">Classic</div>
                            <div className="badge border-green-200 bg-transparent text-green-600">Popular</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlantOfTheWeek;