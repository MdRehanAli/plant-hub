import React from 'react';
import Banner from '../Banner/Banner';
import PlantCares from '../PlantCares/PlantCares';
import Experts from '../Experts/Experts';
import Decoration from '../Decoration/Decoration';
import PlantOfTheWeek from '../PlantOfTheWeek/PlantOfTheWeek';
import Plants from '../Plants/Plants';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <section className='mb-20 lg:m-10'>
                <Banner></Banner>
            </section>
            <main className='max-w-7xl mx-auto w-11/12'>
                <PlantCares></PlantCares>
                <Plants></Plants>
                <Experts></Experts>
                <Decoration></Decoration>
                <PlantOfTheWeek></PlantOfTheWeek>
            </main>
        </div>
    );
};

export default Home;