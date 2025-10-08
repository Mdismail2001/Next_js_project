import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='flex justify-around p-4'>
            
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/services">Services</Link>
               <Link href="/blog">Blog</Link> 
        </div>
    );
};

export default NavBar;