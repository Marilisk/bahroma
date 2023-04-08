import Link from 'next/link';
import React, { FC } from 'react';
import c from './Header.module.scss'
import { useRouter } from 'next/router';


const Header: FC = () => {

    const {pathname} = useRouter()

    console.log('pathname', pathname)

    return (
        <div className={c.wrap}>
            <Link href='/' className={pathname === '/' ? c.activeLInk : c.plainLink}>
                Home
            </Link>
            <Link href='/news' className={pathname === '/news' ? c.activeLInk : c.plainLink}>
                News
            </Link>
        </div>
    );
};

export default Header