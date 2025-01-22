"use client";
import Loading from "@/components/loading";
import { API_DEV_URL } from "@/lib/config";
import { useEffect, useState } from "react";
import SuccessLogin from "../popup/SuccesLogin";
import { useRouter } from "next/navigation";

export default function ResetPassword({ onSwitch }) {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    // Prepare form data
    const formData = new FormData();
    formData.append("code", code);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);

    const response = await fetch(`${API_DEV_URL}/auth/password/reset`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setPopupMessage("Berhasil Reset Password");
      setIsModalOpen(true);
      setTimeout(() => {
        router.push("/"); // Redirect to homepage
      }, 2000);
    } else {
      setError(result.message || "Reset password failed");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/"); // Redirect to homepage when modal is closed
  };

  if (!isClient) return null;

  return (
    <form onSubmit={handleSubmit}>
      {/* Code */}
      <div className="mb-4">
        <label className="block text-sm sm:text-lg mb-2" htmlFor="email">
          Code
        </label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm sm:text-lg mb-2" htmlFor="email">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
        />
      </div>

      {/* Password Confirmation */}
      <div className="mb-4">
        <label className="block text-sm sm:text-lg mb-2" htmlFor="email">
          Konfirmasi Password
        </label>
        <input
          id="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Konfirmasi Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 placeholder-agro-placeholder text-black text-sm sm:text-base"
        />
      </div>

      {/* Error or Success Message */}
      {error && <p className="text-red-900 text-sm">{error}</p>}

      {/* Tombol Login */}
      <button
        type="submit"
        className="w-full bg-agro-green text-white text-base font-medium py-2 px-4 mb-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
      >
        Reset Password
      </button>

      <SuccessLogin isOpen={isModalOpen} onClose={closeModal} />
    </form>
  );
}
