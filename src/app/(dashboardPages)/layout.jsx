import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                {/* sidebar */}
                <div className='col-span-3 h-screen bg-amber-500'>this side bar</div>
                {/* content */}
                <div className='col-span-9'>{children}</div>
                
            </div>
        </div>
    );
};

export default layout;