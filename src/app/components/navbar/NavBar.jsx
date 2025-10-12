
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathname = usePathname();
    // console.log("Current Pathname:", pathname.includes("dashboard")); // Debugging line to check the current pathname
    if (!pathname.includes("dashboard") && !pathname.includes("login") && !pathname.includes("register")) {
    return (
        <div className='flex justify-around p-4'>
            
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/services">Services</Link>
               <Link href="/posts">Posts</Link> 
        </div>
    );
    } else {
        return
        <></>
    }
};

export default NavBar;