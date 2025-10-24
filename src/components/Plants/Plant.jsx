import React from 'react';
import { Link } from 'react-router';

const Plant = ({ plant }) => {
    const { plantId, plantName, category, price, rating, availableStock, careLevel, description, image, providerName } = plant;
    return (
        <Link to={`/plantDetails/${plantId}`} >
            <div>
                <img src="" alt="" />
                <h1>Plant name: {plantId}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate nostrum impedit quam aliquam nobis blanditiis, sunt beatae, libero labore quae sequi aliquid suscipit cumque quia laudantium molestiae? Veritatis, ullam!</p>
            </div>
        </Link >
    );
};

export default Plant;