"use client";

import React, { useState } from "react";
import BackButton from "@/components/riwayat/BackButton";
import Title from "@/components/riwayat/Title";
import ListBox from "@/components/riwayat/ListBox";
import { dummyData } from "@/components/riwayat/data";

export default function HistoryPage() {
    const [category, setCategory] = useState("Tanaman");

    const handleCategoryChange = (category) => {
        setCategory(category);
    };

    return (
        <div className="py-6 px-10 md:px-16 lg:px-20 bg-agro-green">
            <BackButton />
            <Title text="Riwayat Saya" />
            <div className="flex">
                <button
                    onClick={() => handleCategoryChange("Tanaman")}
                    className={`px-4 py-2 rounded-t-md text-sm sm:text-base lg:text-lg ${category === "Tanaman"
                        ? "bg-agro-dark-green text-white"
                        : "bg-none text-white"
                        }`}
                >
                    Jenis Tanaman
                </button>
                <button
                    onClick={() => handleCategoryChange("Penyakit")}
                    className={`px-4 py-2 rounded-t-md text-sm sm:text-base lg:text-lg ${category === "Penyakit"
                        ? "bg-agro-dark-green text-white"
                        : "bg-none text-white"
                        }`}
                >
                    Penyakit Tanaman
                </button>
            </div>
            <ListBox data={dummyData[category]} />
        </div>
    );
}
