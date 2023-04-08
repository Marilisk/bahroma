import React, { FC } from 'react';
import c from './Home.module.scss'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {


    return (
        <Layout>
            <div>
                Home
            </div>

        </Layout>
    );
};

export default Home;