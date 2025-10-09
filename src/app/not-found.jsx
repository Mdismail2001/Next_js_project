import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='flex justify-center items-center h-[400px] text-3xl font-bold'>
            Not Found
            <Link href='/' className='text-blue-500 underline ml-2'>Go Home</Link>
        </div>
    );
};

export default notFound;