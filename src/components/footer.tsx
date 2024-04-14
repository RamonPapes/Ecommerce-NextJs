import React, { Component }  from 'react';
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900 bottom-0 w-full mt-4 self-end">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/about" className=" hover:underline">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Careers</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Values</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/contato" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Instagram</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Twitter</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/about" className=" hover:underline">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Careers</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Values</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/contato" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Instagram</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Twitter</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="" className="hover:underline">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}