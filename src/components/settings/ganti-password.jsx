"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function GantiPassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Password tidak cocok!");
        } else {
            alert("Password berhasil diganti!");
        }
    };

    return (
        <div className="py-4 px-6 md:py-6 md:px-10">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Ganti Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm md:text-base font-medium mb-2">Password Lama</label>
                    <div className="relative">
                        <input
                            type={showOldPassword ? "text" : "password"}
                            className="w-full p-2 md:p-3 border rounded pr-10"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-500"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                            {showOldPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm md:text-base font-medium mb-2">Password Baru</label>
                    <div className="relative">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            className="w-full p-2 md:p-3 border rounded pr-10"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-500"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                            {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm md:text-base font-medium mb-2">Konfirmasi Password</label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full p-2 md:p-3 border rounded pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-500"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                </div>
                <button type="submit" className="px-4 py-2 md:px-6 md:py-3 bg-agro-green text-white rounded hover:bg-agro-dark-green">
                    Simpan
                </button>
            </form>
        </div>
    );
}
