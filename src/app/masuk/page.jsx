"use client";

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/Register.svg')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Card */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8 w-[315px]">
                    <h2 className="text-3xl font-bold text-agro-dark-green mb-4">Masuk</h2>
                    <form>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="email@gmail.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-xs"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 relative">
                            <label className="block text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-xs"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9 text-gray-500 focus:outline-none"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </button>
                        </div>

                        <div className='mb-3'>
                            <Link
                                href="/"
                            >
                                <p className='text-xs flex justify-end'>Lupa Password?</p>
                            </Link>
                        </div>

                        {/* Tombol Login */}
                        <button
                            type="submit"
                            className="w-full bg-agro-green text-white text-sm font-semibold py-2 px-4 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        >
                            Masuk
                        </button>

                        {/* Login Google */}
                        <button className="flex items-center px-4 py-2 mb-6 bg-white text-agro-green font-semibold text-sm rounded-lg w-full justify-center"
                        >
                            <Image
                                src="/images/google.svg"
                                alt="Google Logo"
                                width={100}
                                height={100}
                                className="w-5 h-5 mr-2"
                            />
                            Login dengan Google
                        </button>

                        {/* Have Account */}
                        <div className='text-sm text-center'>
                            <p>Belum punya akun? <Link href="/daftar" className='text-agro-dark-green text-semibold'>Daftar</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
