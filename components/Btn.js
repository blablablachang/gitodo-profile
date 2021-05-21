import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css";
  
export const Btn = props => {

    return (
        <>
        <Link>
        <div className={styles.btn}>
            <button className="w-50 max-w-xs space-x-4 font-bold hover:bg-gray-200 hover:text-black p-3 shadow rounded-lg">
                {props.text}
            </button><br></br>
        </div>
        </Link>
        </>
    );
};
