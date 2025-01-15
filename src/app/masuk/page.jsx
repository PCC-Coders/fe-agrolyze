"use client";

import React, {useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {setToken} from "@/lib/auth";
import Loading from "@/components/loading";
import {useRouter} from "next/navigation";
import SuccessLogin from "@/components/popup/SuccesLogin";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    // Prepare form data
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      // Send login request
      const response = await fetch(`http://127.0.0.1:8000/api/auth/login`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Set token in cookies
        setToken(result.data.token);

        // Show success message in the modal
        setPopupMessage(result.message);
        setIsModalOpen(true); // Open modal

        // Wait for 2 seconds then redirect (optional, depends on user flow)
        setTimeout(() => {
          router.push("/"); // Redirect to homepage
        }, 2000);
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/"); // Redirect to homepage when modal is closed
  };

  return (
    <div
      className='relative min-h-screen bg-cover bg-center'
      style={{backgroundImage: `url('/images/Register.svg')`}}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Card */}
      <div className='relative z-10 flex items-center justify-center min-h-screen'>
        <div className='bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8 w-[350px]'>
          <h2 className='text-2xl sm:text-4xl font-bold text-agro-dark-green mb-4'>
            Masuk
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className='mb-4'>
              <label className='block text-sm sm:text-lg mb-2' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email@gmail.com'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base'
              />
            </div>

            {/* Password */}
            <div className='mb-4 relative'>
              <label
                className='block text-sm sm:text-lg mb-2'
                htmlFor='password'
              >
                Password
              </label>
              <input
                id='password'
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base flex items-center'
              />
              <button
                type='button'
                className='absolute right-3 top-9 sm:top-12 text-gray-500 focus:outline-none'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
                )}
              </button>
            </div>

            <div className='mb-3'>
              <Link href='/'>
                <p className='text-sm flex justify-end'>Lupa Password?</p>
              </Link>
            </div>

            {/* Error or Success Message */}
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            {popupMessage && (
              <p className='text-green-500 text-sm'>{popupMessage}</p>
            )}

            {/* Tombol Login */}
            <button
              type='submit'
              className='w-full bg-agro-green text-white text-base font-medium py-2 px-4 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300'
              disabled={loading}
            >
              Masuk
            </button>

            {/* Login Google */}
            <button
              type='button'
              className='flex items-center px-4 py-2 mb-6 bg-white text-agro-green font-medium text-base rounded-lg w-full justify-center'
            >
              <Image
                src='/images/google.svg'
                alt='Google Logo'
                width={100}
                height={100}
                className='w-5 h-5 mr-2'
              />
              Masuk dengan Google
            </button>

            {/* Have Account */}
            <div className='text-base text-center'>
              <p>
                Belum punya akun?{" "}
                <Link
                  href='/daftar'
                  className='text-agro-dark-green text-semibold'
                >
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && <Loading />}

      {/* Success Login Modal */}
      <SuccessLogin isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
