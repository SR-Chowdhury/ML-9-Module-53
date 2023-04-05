import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='hover:bg-purple-700'>
            <a href="#">{route.name}</a>
        </li>
    );
};

export default Link;