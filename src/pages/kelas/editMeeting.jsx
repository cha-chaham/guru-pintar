import { React, useEffect, useState } from "react";
import UserLayout from "@/components/userLayout";
import { Input, Select } from "@/components/input";
import { Button, ButtonBack } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  getDetailMeeting,
  meetingSchema,
  updateMeeting,
} from "@/utils/apis/meeting";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMeeting() {
  document.title = "Edit Pertemuan";
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailMeeting(+params.idMeeting);
      setStudentData(result.meeting);
      setValue("kelasMeetingName", result.kelasMeetingName);
      setValue("kelasMeetingDate", result.kelasMeetingDate);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(meetingSchema) });

  async function onSubmit(data) {
    const studentNames = studentData;
    const presenceData = studentNames.map((studentName, index) => ({
      studentName: studentName.studentName,
      presence: data.meeting[index].presence,
    }));

    const requestData = {
      meeting: presenceData,
      kelasMeetingName: data.kelasMeetingName,
      kelasMeetingDate: data.kelasMeetingDate,
      idKelas: params.idKelas,
    };

    try {
      await updateMeeting({ requestData, id: params.idMeeting });
      toast.success("Kelas Berhasil Diperbaharui");
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="flex gap-4 items-center mb-6">
          <ButtonBack title="Edit Pertemuan" />
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              aria-label="input-kelas-meetingName"
              label="Nama Materi"
              name="kelasMeetingName"
              register={register}
              error={errors.kelasMeetingName?.message}
              disabled={isLoading}
            />
            <Input
              aria-label="input-kelas-meetingDate"
              label="Tanggal Pembelajaran"
              name="kelasMeetingDate"
              register={register}
              error={errors.kelasMeetingDate?.message}
              type="date"
              disabled={isLoading}
            />
            <div className="mt-8">
              <p className="font-semibold text-xl lg:text-2xl mb-4">
                Daftar Siswa
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {studentData.map((item, index) => (
                  <div
                    className="rounded-full px-8 py-4 bg-base-300 flex justify-between items-center"
                    key={index}
                  >
                    <p className="text-center font-semibold">
                      {item.studentName}
                    </p>
                    <Select
                      options={["Hadir", "Sakit/Izin", "Alpa"]}
                      register={register}
                      name={`meeting.${index}.presence`}
                      error={errors.meeting?.[index]?.presence?.message}
                      defaultValue={item.presence}
                      disabled={isLoading}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              label="Submit"
              type="submit"
              className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-4 px-5 place-content-center lg:px-8"
              disabled={isSubmitting || isLoading}
            />
          </form>
        </div>
      </div>
    </UserLayout>
  );
}
