"use client";

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading';
import SuccessRegister from '@/components/popup/SuccessRegister';
import { setToken } from '@/lib/auth';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        if (password.length < 8) {
            setError('Password harus 8 karakter atau lebih.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Password dan Konfirmasi Password tidak cocok.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
        const form = new FormData();
        form.append('name', name);
        form.append('email', email);
        form.append('password', password);
        form.append('password_confirmation', confirmPassword);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: form
            });

            const result = await response.json();

            if (response.ok) {
                setToken(result.data.token);
                setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                setIsModalOpen(true);
            } else {
                setError(result.message || 'Terjadi kesalahan.');
            }
        } catch (error) {
            setError('Terjadi kesalahan saat menghubungi server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        router.push('/'); // Redirect ke beranda
    };

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
                <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8 w-[350px]">
                    <h2 className="text-2xl sm:text-4xl font-bold text-agro-dark-green mb-4">Daftar</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Nama Pengguna */}
                        <div className="mb-4">
                            <label className="block text-sm sm:text-lg mb-2" htmlFor="name">
                                Username
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="username"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm sm:text-lg mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="email@gmail.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 relative">
                            <label className="block text-sm sm:text-lg mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9 sm:top-12 text-gray-500 focus:outline-none"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </button>
                            {formData.password && formData.password.length < 8 && (
                                <p className="text-red-500 text-sm mt-2">Password harus 8 karakter atau lebih.</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6 relative">
                            <label className="block text-sm sm:text-lg mb-2" htmlFor="confirmPassword">
                                Konfirmasi Password
                            </label>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9 sm:top-12 text-gray-500 focus:outline-none"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                            </button>
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        {/* Tombol Register */}
                        <button
                            type="submit"
                            className="w-full bg-agro-green text-white py-2 px-4 mb-2 rounded-lg text-base focus:outline-none focus:ring focus:ring-indigo-300"
                            disabled={isSubmitting || formData.password.length < 8}
                        >
                            Daftar
                        </button>

                        {/* Have Account */}
                        <div className='text-base text-center'>
                            <p>Sudah punya akun? <Link href="/masuk" className='text-agro-dark-green text-semibold'>Masuk</Link></p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Loading Overlay */}
            {isSubmitting && <Loading />}

            {/* Success Modal */}
            <SuccessRegister isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
}
