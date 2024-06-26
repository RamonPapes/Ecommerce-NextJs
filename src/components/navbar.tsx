import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Clothes Clove</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggleNavbar}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <Link href="/" className={`block py-2 px-3 rounded md:bg-transparent md:p-0  hover:bg-gray-700 md:hover:bg-transparent border-gray-700 ${router.pathname === '/' ? 'text-blue-700 bg-gray-900' : 'text-white hover:bg-blue-700 md:hover:text-blue-700'}`} aria-current={router.pathname === '/' ? 'page' : undefined}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:bg-gray-700 md:hover:bg-transparent border-gray-700 ${router.pathname === '/about' ? 'text-blue-700 bg-gray-900' : 'text-white hover:bg-blue-700 md:hover:text-blue-700'}`} aria-current={router.pathname === '/about' ? 'page' : undefined}>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`block py-2 px-3 rounded md:bg-transparent md:p-0  hover:bg-gray-700 md:hover:bg-transparent border-gray-700 ${router.pathname === '/contact' ? 'text-blue-700 bg-gray-900' : 'text-white hover:bg-blue-700 md:hover:text-blue-700'}`} aria-current={router.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
