// components/SuccessModal.jsx
import React from 'react';
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';

export default function SuccessLogin({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="bg-green-500 p-2 rounded-lg absolute top-3 right-3 text-white transition focus:outline-none"
                >
                    <AiOutlineClose size={15} />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center mt-10">
                    <AiOutlineCheckCircle className="text-green-500" size={130} />
                    <h2 className="text-xl font-semibold text-gray-800 mt-7 mb-5 text-center">
                        Anda Berhasil Masuk
                    </h2>
                </div>
            </div>
        </div>
    );
}
