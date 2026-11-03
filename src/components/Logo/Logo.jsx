import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex h-[70px] w-[100px] rounded-xl overflow-hidden'>
                <img src={logo} alt="" />
                
            </div>
        </Link>
    );
};

export default Logo;