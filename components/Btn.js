import React from 'react';
import Link from 'next/link';
  
export const Btn = props => {

    return (
        <>
        <Link href='/'>
            <a className={props.multiclass + " border-gray-100 bg-white font-semibold hover:bg-gray-200 hover:text-black p-3 text-left"}>
                {props.text}
            </a>
        </Link>
        </>
    );
};
