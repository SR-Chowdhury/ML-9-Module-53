import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell } from 'recharts';

const Chart1 = () => {

    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch('marks.json')
            .then(res => res.json())
            .then(data => setMarks(data))
    }, []);
    return (
        <div className='container mx-auto mt-10 flex gap-2 justify-between'>
            <LineChart width={600} height={300} data={marks}>
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line dataKey="maths" />
                <XAxis dataKey={"name"} />
                <YAxis />
                <Tooltip />
            </LineChart>

            <BarChart width={600} height={300} data={marks}>
                <Bar dataKey="chemistry" fill="#8884d8" />
                <Tooltip/>
                <XAxis dataKey={"name"}/>
                <YAxis/>
            </BarChart>
        </div>
    );
};

export default Chart1;