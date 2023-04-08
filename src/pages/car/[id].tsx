import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const CarPage: NextPage = () => {

    const {push, replace} = useRouter()

    //console.log(query)

    return (
        <div>
            <div>
            Car Page
            </div>
            <button onClick={() => push('/')}>
                на главную
            </button>

            <button onClick={() => replace('/')}>
                на главную
            </button>
        </div>
    );
};

export default CarPage