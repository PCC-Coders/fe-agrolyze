"use client";
import Loading from "@/components/loading";
import { API_DEV_URL } from "@/lib/config";
import { useEffect, useState } from "react";

export default function CheckEmail({ onSwitch }) {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    // Prepare form data
    const formData = new FormData();
    formData.append("email", email);

    const response = await fetch(`${API_DEV_URL}/auth/password/email`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      onSwitch();
    } else {
      setError(result.message || "Reset password failed");
    }
  };

  if (!isClient) return null;

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm sm:text-lg mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@gmail.com"
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
        Lupa Password
      </button>
    </form>
  );
}
