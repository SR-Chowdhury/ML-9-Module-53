import React, { useEffect, useState } from 'react';
import ProductPrice from '../ProductPrice/ProductPrice';

const PriceList = () => {

    const [prices, setPrices] = useState([]);
    useEffect( () => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data =>setPrices(data))
    }, []);

    return (
        <div className='container mx-auto mt-5'>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    prices.map(price => <ProductPrice key={price.id} price={price}/>)
                }
            </div>
        </div>

    );
};

export default PriceList;