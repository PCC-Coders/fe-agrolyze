import React from "react";
import Image from "next/image";

export default function ListBoxItem({ image, name, date, result }) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center bg-agro-light-gray rounded-lg p-4 shadow-sm mb-4">
            {/* Gambar */}
            <Image
                src={image}
                alt={name}
                width={100}
                height={100}
                className="object-cover rounded-md mb-4 sm:mb-0 sm:mr-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            {/* Informasi */}
            <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium">{name}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Tanggal: {date}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2">
                    Hasil: {result}
                </p>
                {/* Tombol (Hanya muncul di bawah pada layar kecil) */}
                <div className="block sm:hidden mt-2">
                    <button
                        className="w-full px-4 py-2 rounded-lg bg-agro-light-yellow text-xs sm:text-sm lg:text-base"
                    >
                        Lihat selengkapnya
                    </button>
                </div>
            </div>
            {/* Tombol (Tetap di kanan pada layar besar) */}
            <div className="hidden sm:block">
                <button
                    className="px-4 py-2 rounded-lg bg-agro-light-yellow text-xs sm:text-sm lg:text-base"
                >
                    Lihat selengkapnya
                </button>
            </div>
        </div>
    );
}
