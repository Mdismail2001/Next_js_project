"use client";
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    // console.log("Current Pathname:", pathname); // Debugging line to check the current pathname
    if (!pathname.includes("dashboard") && !pathname.includes("login") && !pathname.includes("register"))
        {
    return (
        <div className='p-4 text-center'>
            this is footer
        </div>
    );
    }else{
        return <></>
    }
};

export default Footer;