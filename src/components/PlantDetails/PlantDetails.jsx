import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const PlantDetails = () => {

    const { id } = useParams();
    const pId = parseInt(id);
    const plants = useLoaderData();
    const singlePlant = plants.find(plant => plant.plantId === pId)
    const { plantName, category, price, rating, availableStock, careLevel, description, image, providerName } = singlePlant;

    const handleBookNow = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name, email);

        toast.success("Successfully Booked!")
        event.target.reset();
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 my-10'>
            <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>Plant Details</h1>
            <p className='text-center text-green-800 mt-5'>Each leaf tells a story of growth, resilience, and renewal. Discover the charm, benefits, and nurturing secrets of your indoor plant companion.</p>

            <div className='flex flex-col xl:flex-row justify-between items-center gap-10 my-10'>
                <img className='rounded-2xl' src={image} alt="Plant Image" />
                <div className='p-5 shadow-2xl rounded-2xl relative'>
                    <p className='text-green-500 text-right absolute right-3 top-2'><small>{providerName}</small></p>
                    <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950'>Plant: <span className='text-green-600'>{plantName}</span></h1>
                    <p className='text-justify text-green-950 mt-5'><span className='font-bold'>Description: </span><span className='text-green-800'>{description}</span></p>
                    <p className='text-3xl text-bold text-green-950 font-semibold text-center my-4'>Category: <span className='text-green-800'>{category}</span></p>
                    <p className='text-3xl lg:text-5xl text-green-950 font-bold text-center'>Price: <span className='text-green-500'>${price}</span></p>
                    <div className='flex flex-col justify-between items-center gap-4 my-4'>
                        <p className='text-3xl text-green-950 font-semibold'>Ratings: <span className='text-yellow-400 font-bold'>{rating}</span></p>
                        <p className='text-3xl text-green-950 font-semibold'>In Stock: <span className='text-green-500'>{availableStock}</span></p>
                        <p className='text-2xl text-green-950 font-semibold'>Care Level: <span className='text-green-500'>{careLevel}</span></p>
                    </div>
                </div>
            </div>

            {/* Form  */}
            <div className="hero my-16">
                <div className="card w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl lg:text-5xl font-bold text-green-950 text-center mb-3">Book Consultation</h1>
                        <form onSubmit={handleBookNow}>
                            <fieldset className="fieldset">
                                {/* Name Field */}
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input w-full" placeholder="Name" />
                                {/* Email Field */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input w-full" placeholder="Email" />
                                <button className="btn bg-green-800 text-white mt-4">Book Now</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;