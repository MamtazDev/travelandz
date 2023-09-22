import React, { useState } from 'react';
import plus from '../../assets/agent/plus.png'
import minus from '../../assets/agent/minus.png'
const Counter = ({number,label}) => {
    const [v_number,v_setNumber] = useState(number);

    const plus_handler =() => {
        v_setNumber(v_number+1);
        console.log(v_number)
    }
    const minus_handler =() => {
        if(v_number > 0){
            v_setNumber(v_number-1)
        }
    }
    return (
        <div>
        <label htmlFor="" className='text-uppercase label'>{label}</label>
            <div className='d-flex align-center'>
            <img onClick={plus_handler} className='small-img pointer' src={plus} alt="plus" />
                <p>{v_number}</p>
            <img onClick={minus_handler} className='small-img pointer' src={minus} alt="plus" />
        </div>
        </div>
    );
}

export default Counter;
