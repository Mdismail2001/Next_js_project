import React from 'react';

const page = ({params}) => {
    const id = params.id;
    return (
        <div className='text-center text-3xl font-bold mt-20'>
            Single service details page id: {id}
        </div>
    );
};

export default page;