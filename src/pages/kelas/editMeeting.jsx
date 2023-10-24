import { React, useState } from "react";
import UserLayout from "@/components/userLayout";
import { Input } from "@/components/input";
import { Button, ButtonBack } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/utils/apis/kelas";
import { toast } from "react-toastify";

export default function EditMeeting() {
  document.title = "Edit Pertemuan";
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

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(studentSchema) });

  function onSubmit(data) {
    toast.success("Nama Berhasil Ditambahkan");
    reset();
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="flex gap-4 items-center mb-6">
          <ButtonBack title="Edit Pertemuan" />
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Input
              aria-label="input-class-meetingName"
              label="Nama Materi"
              name="classMeetingName"
              register={register}
              error={errors.classMeetingName?.message}
            />
            <Input
              aria-label="input-class-meetingDate"
              label="Tanggal Pembelajaran"
              name="classMeetingDate"
              register={register}
              error={errors.classMeetingDate?.message}
              type="date"
            />
            <div className="mt-8">
              <p className="font-semibold text-xl lg:text-2xl mb-4">
                Daftar Siswa
              </p>
              {/* TODO: BUAT CHECKLIST */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {dummyStudentNames.map((item, index) => (
                  <div
                    className="rounded-full px-4 py-4 bg-base-300"
                    key={index}
                  >
                    <Input type="checkbox" name="classStudent" />
                    <label htmlFor={`${item}`}>{`${item}`}</label>
                  </div>
                ))}
              </div>
            </div>
            <Button
              label="Submit"
              type="submit"
              className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-4 px-5 place-content-center lg:px-8"
            />
          </form>
        </div>
      </div>
    </UserLayout>
  );
}
