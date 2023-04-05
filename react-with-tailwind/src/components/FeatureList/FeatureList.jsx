import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

const FeatureList = ({feature}) => {
    return (
        <div className='flex justify-items-center my-2'>
            <ShieldCheckIcon className="h-6 w-6 text-blue-500 mr-1" />
            {feature}
        </div>
    );
};

export default FeatureList;