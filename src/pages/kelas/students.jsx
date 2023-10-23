import { React, useState } from "react";
import UserLayout from "@/components/userLayout";
import { Input } from "@/components/input";
import Button from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/utils/apis/kelas";
import { toast } from "react-toastify";

export default function Students() {
  const dummyStudentNames = [
    "Adi Nugroho",
    "Budi Santoso",
    "Citra Dewi",
    "Dian Putra",
    "Eka Prasetya",
    "Fauzi Ramadhan",
    "Gita Wulandari",
    "Hendra Wijaya",
    "Intan Puspita",
    "Joko Susilo",
    "Kartika Sari",
    "Luki Kusuma",
    "Mega Indah",
    "Nina Rahmawati",
    "Opik Pratama",
    "Putri Amelia",
    "Rudi Hartono",
    "Siti Aisyah",
    "Taufik Rahman",
    "Wulan Sari",
  ];

  const [studentData, setStudentData] = useState(dummyStudentNames);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(studentSchema) });

  function onSubmit(data) {
    const newStudentName = data.classStudent;
    setStudentData([...studentData, newStudentName]);
    toast.success("Nama Berhasil Ditambahkan");
    reset();
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <p className="font-bold text-3xl lg:text-4xl mb-4">Siswa</p>
        <div className="mt-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              aria-label="input-class-student"
              label="Nama Siswa"
              name="classStudent"
              register={register}
              error={errors.classStudent?.message}
            />
            <Button
              label="Submit"
              type="submit"
              className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-1 px-5 place-content-center lg:px-8"
            />
          </form>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-xl lg:text-2xl mb-4">Daftar Siswa</p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {studentData.map((item, index) => (
              <div className="rounded-full px-4 py-4 bg-base-300" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
