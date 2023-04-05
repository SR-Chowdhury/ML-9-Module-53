import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AxiosComp = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phonesData = loadedData.map(data => 
            {
                const parts = data.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    brand: data.brand,
                    name: data.phone_name,
                    price: price
                }
                return phoneInfo;
            });

            setPhones(phonesData);
        });

    }, []);

    return (
        <div>
            <BarChart width={700} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis/>
                <YAxis/>
            </BarChart>
        </div>
    );
};

export default AxiosComp;