import { React, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { getDetailKelas, updatelKelas } from "@/utils/apis/kelas";
import { kelasSchema } from "@/utils/apis/kelas";
import UserLayout from "@/components/userLayout";
import { Input, Select } from "@/components/input";
import { Button, ButtonBack } from "@/components/button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditClass() {
  document.title = "Edit Kelas";
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(kelasSchema) });
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function onSubmitEdit(data) {
    try {
      await updatelKelas({ data, id: params.id });
      toast.success("Data Berhasil di Edit");
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    } finally {
    }
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailKelas(+params.id);
      setValue("kelasName", result.kelasName);
      setValue("kelasLevel", result.kelasLevel);
      setValue("kelasDay", result.kelasDay);
      setValue("kelasTime", result.kelasTime);
    } catch (error) {
      toast.error(error.message, { autoClose: 1000, hideProgressBar: false });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="flex gap-4 items-center mb-6">
          <ButtonBack title="Edit Kelas" />
        </div>
        <form onSubmit={handleSubmit(onSubmitEdit)}>
          <Input
            aria-label="input-class-name"
            label="Nama Pelajaran"
            name="kelasName"
            register={register}
            error={errors.kelasName?.message}
            disabled={isLoading}
          />
          <Input
            aria-label="input-class-level"
            label="Tingkat Kelas"
            name="kelasLevel"
            register={register}
            error={errors.kelasLevel?.message}
            disabled={isLoading}
          />
          <div className="grid grid-cols-2 gap-8">
            <Select
              label="Jadwal Hari"
              placeholder="Pilih Hari Pelajarannya Disini"
              name="kelasDay"
              aria-label="input-class-day"
              register={register}
              error={errors.kelasDay?.message}
              options={["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]}
              disabled={isLoading}
            />
            <Select
              label="Jam Pelajaran"
              placeholder="Pilih Sesi Pelajarannya Disini"
              name="kelasTime"
              aria-label="input-class-time"
              register={register}
              error={errors.kelasTime?.message}
              options={[
                "7.30 - 9.00",
                "9.00 - 10.30",
                "11.00 - 12.30",
                "12.30 - 14.00",
              ]}
              disabled={isLoading}
            />
          </div>
          <Button
            label="Submit"
            type="submit"
            className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-4 px-5 place-content-center lg:px-8"
            disabled={isLoading || isSubmitting}
          />
        </form>
      </div>
    </UserLayout>
  );
}
