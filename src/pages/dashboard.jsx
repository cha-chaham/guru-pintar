import React from "react";

import { ClassCard } from "@/components/card";
import { useTheme } from "@/utils/contexts/theme";
import UserLayout from "@/components/userLayout";
import { Link, Navigate } from "react-router-dom";

const dumpClasses = [
  {
    id: 1,
    title: "Matematika Kelas 1",
    description: "07.00 - 09.00, Senin Rabu",
  },
  {
    id: 2,
    title: "Bahasa Indonesia Kelas 2",
    description: "08.00 - 10.00, Selasa Kamis",
  },
  {
    id: 3,
    title: "IPA Kelas 3",
    description: "09.00 - 11.00, Senin Rabu",
  },
  {
    id: 4,
    title: "Bahasa Inggris Kelas 4",
    description: "10.00 - 12.00, Selasa Kamis",
  },
  {
    id: 5,
    title: "Sejarah Kelas 5",
    description: "11.00 - 13.00, Senin Rabu",
  },
  {
    id: 6,
    title: "Seni Budaya Kelas 6",
    description: "13.00 - 15.00, Selasa Kamis",
  },
  {
    id: 7,
    title: "Olahraga Kelas 7",
    description: "14.00 - 16.00, Senin Rabu",
  },
  {
    id: 8,
    title: "Geografi Kelas 8",
    description: "15.00 - 17.00, Selasa Kamis",
  },
  {
    id: 9,
    title: "Ekonomi Kelas 9",
    description: "16.00 - 18.00, Senin Rabu",
  },
];

export default function Dashboard() {
  const { theme } = useTheme();
  document.title = "Dashboard";
  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="w-full mb-8">
          <p className="text-xl">Selamat Datang Kembali,</p>
          <p className="font-bold text-4xl">John Doe</p>
        </div>
        <div className="w-full">
          <p className="font-semibold text-2xl">Daftar Kelas</p>
          <div className="grid grid-cols-1 py-4 gap-5 md:grid-cols-2">
            {dumpClasses.map((item, index) => (
              <ClassCard
                key={index}
                title={item.title}
                description={item.description}
                url={`https://picsum.photos/1080/720?${item.title}=${index}`}
                index={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
