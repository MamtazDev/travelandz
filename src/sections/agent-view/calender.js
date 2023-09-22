import React from 'react';
import { Link } from 'react-router-dom';

const Calender = () => {
    return (
        <div>
            <p  className='text-uppercase mt-0 text-[#1A1A33] text-[12px] font-[500]'>Date</p>
            <label htmlFor="">Dec 1st - Dec 7, 2023 <Link>Edit</Link></label>
        </div>
    );
}

export default Calender;
