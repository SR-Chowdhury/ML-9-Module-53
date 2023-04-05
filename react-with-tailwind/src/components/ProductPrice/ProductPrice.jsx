import React from 'react';
import FeatureList from '../FeatureList/FeatureList';

const ProductPrice = ({price}) => {
    return (
        <div className='border-solid border-2 border-indigo-600 p-16 flex flex-col'>
            <h1 className='text-center'><span className='text-5xl text-purple-900 font-semibold'>{price.price}</span> / month</h1>
            <h5 className='text-2xl text-center'>{price.name} membership</h5>
            <h5 className='text-2xl my-3'>Features List:</h5>
            {
                price.features.map((feature, index) => <FeatureList key={index} feature={feature}/>)
            }
            <br />
            <button className='w-full mt-auto text-2xl py-3 bg-purple-800 '>Add to Cart</button>
        </div>
    );
};

export default ProductPrice;