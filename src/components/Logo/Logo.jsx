import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex items-end h-[80px] w-[80px]'>
                <img src={logo} alt="" />
                
            </div>
        </Link>
    );
};

export default Logo;