"use client";

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    <h2 className="text-3xl font-bold text-agro-dark-green mb-4">Daftar</h2>
                    <form>
                        {/* Nama Pengguna */}
                        <div className="mb-4">
                            <label className="block text-sm mb-2" htmlFor="username">
                                Nama Pengguna
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="username"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-xs"
                            />
                        </div>

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
                                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} /> }
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6 relative">
                            <label className="block text-sm mb-2" htmlFor="confirmPassword">
                                Konfirmasi Password
                            </label>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="konfirmasi password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-xs"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9 text-gray-500 focus:outline-none"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </button>
                        </div>

                        {/* Tombol Register */}
                        <button
                            type="submit"
                            className="w-full bg-agro-green text-white py-2 px-4 mb-2 rounded-lg  focus:outline-none focus:ring focus:ring-indigo-300"
                        >
                            Daftar
                        </button>

                        {/* Have Account */}
                        <div className='text-sm text-center'>
                            <p>Sudah punya akun? <Link href="/masuk" className='text-agro-dark-green text-semibold'>Masuk</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
