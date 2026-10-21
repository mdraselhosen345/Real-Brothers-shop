import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from '../../../components/Logo/Logo';
import { IoSearchOutline } from "react-icons/io5";
import Acount from "../../../assets/Acount.png";

const NavBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const value = search.trim();

        if (value) {
            navigate(`/shope?search=${encodeURIComponent(value)}`);
        }
    };

    return (
        <div className="navbar bg-[#000047] shadow-sm px-4
            relative flex items-center justify-between">

            {/* Logo */}
            <div className="z-10">
                <div className="btn btn-ghost text-xl p-0">
                    <Logo />
                </div>
            </div>

            {/* Desktop Search */}
            <form
                onSubmit={handleSearch}
                className="hidden md:flex md:absolute md:left-1/2
                md:-translate-x-1/2 w-full max-w-md px-4"
            >
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered w-full pr-20
                        focus:outline-none focus:border-[#F5B027]
                        rounded-md"
                    />

                    <button
                        type="submit"
                        aria-label="Search products"
                        className="absolute right-1 top-1/2
                        -translate-y-1/2 p-2 bg-[#F5B027]
                        hover:text-red-600 transition-colors
                        rounded-md"
                    >
                        <IoSearchOutline size={22} />
                    </button>
                </div>
            </form>

            {/* Mobile Search */}
            <form
                onSubmit={handleSearch}
                className="relative flex items-center md:hidden"
            >
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-36 sm:w-44 pr-12"
                />

                <button
                    type="submit"
                    aria-label="Search products"
                    className="absolute right-1 top-1/2
                    -translate-y-1/2 p-2 bg-[#F5B027]
                    rounded-md hover:text-red-600"
                >
                    <IoSearchOutline size={20} />
                </button>
            </form>

            {/* Account */}
            <div className="flex gap-1">
                <Link
                    to="/account"
                    className="border-gray-300 rounded-lg
                    px-3 py-1.5 hover:bg-gray-50"
                >
                    <img
                        src={Acount}
                        className="h-[40px] w-[40px]"
                        alt="Account"
                    />
                </Link>
            </div>

        </div>
    );
};

export default NavBar;
