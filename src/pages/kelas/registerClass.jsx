import { React, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createKelas } from "@/utils/apis/kelas";
import { kelasSchema } from "@/utils/apis/kelas";
import UserLayout from "@/components/userLayout";
import { Input, Select } from "@/components/input";
import Button from "@/components/button";
import { toast } from "react-toastify";

export default function RegisterClass() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(kelasSchema) });

  function onSubmitData() {
    toast.success("Kelas Berhasil Ditambahkan");
    reset();
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <p className="font-bold text-3xl lg:text-4xl mb-4">Tambah Kelas</p>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <Input
            aria-label="input-class-name"
            label="Nama Pelajaran"
            name="className"
            register={register}
            error={errors.className?.message}
          />
          <Input
            aria-label="input-class-level"
            label="Tingkat Kelas"
            name="classLevel"
            register={register}
            error={errors.classLevel?.message}
          />
          <div className="grid grid-cols-2 gap-8">
            <Select
              label="Jadwal Hari"
              placeholder="Pilih Hari Pelajarannya Disini"
              name="classDay"
              aria-label="input-class-day"
              register={register}
              error={errors.classDay?.message}
              options={["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]}
            />
            <Select
              label="Jam Pelajaran"
              placeholder="Pilih Sesi Pelajarannya Disini"
              name="classTime"
              aria-label="input-class-time"
              register={register}
              error={errors.classTime?.message}
              options={[
                "7.30 - 9.00",
                "9.00 - 10.30",
                "11.00 - 12.30",
                "12.30 - 14.00",
              ]}
            />
          </div>
          <Button
            label="Submit"
            type="submit"
            className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-4 px-5 place-content-center lg:px-8"
          />
        </form>
      </div>
    </UserLayout>
  );
}
