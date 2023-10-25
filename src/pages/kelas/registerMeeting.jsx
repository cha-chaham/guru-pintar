import { React, useState, useEffect } from "react";
import UserLayout from "@/components/userLayout";
import { Input, Select } from "@/components/input";
import { Button, ButtonBack } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDetailKelas } from "@/utils/apis/kelas";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { meetingSchema } from "@/utils/apis/meeting";
import { createMeeting } from "@/utils/apis/meeting";

export default function RegisterMeeting() {
  document.title = "Registrasi Pertemuan";

  const params = useParams();

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailKelas(+params.idKelas);
      setStudentData(result.kelasStudents);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(meetingSchema) });

  async function onSubmit(data) {
    const studentNames = studentData;

    const presenceData = studentNames.map((studentName, index) => ({
      studentName,
      presence: data.meeting[index].presence,
    }));

    const requestData = {
      meeting: presenceData,
      kelasMeetingName: data.kelasMeetingName,
      kelasMeetingDate: data.kelasMeetingDate,
      idKelas: params.idKelas,
    };

    console.log(requestData);
    try {
      await createMeeting(requestData);
      toast.success("Berhasil Menambahkan Pertemuan Baru");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="flex gap-4 items-center mb-6">
          <ButtonBack title="Registrasi Pertemuan" />
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              aria-label="input-class-meetingName"
              label="Nama Materi"
              name="kelasMeetingName"
              register={register}
              error={errors.kelasMeetingName?.message}
            />
            <Input
              aria-label="input-class-meetingDate"
              label="Tanggal Pembelajaran"
              name="kelasMeetingDate"
              register={register}
              error={errors.kelasMeetingDate?.message}
              type="date"
            />
            <div className="mt-8">
              <p className="font-semibold text-xl lg:text-2xl mb-4">
                Daftar Siswa
              </p>
              {/* TODO: BUAT CHECKLIST */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {studentData.map((item, index) => (
                  <div
                    className="rounded-full px-8 py-4 bg-base-300 flex justify-between items-center"
                    key={index}
                  >
                    <p className="text-center font-semibold">{item}</p>
                    <Select
                      options={["Hadir", "Sakit/Izin", "Alpa"]}
                      register={register}
                      name={`meeting.${index}.presence`}
                      error={errors.meeting?.[index]?.presence?.message}
                      defaultValue="Hadir"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              label="Submit"
              type="submit"
              className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-4 px-5 place-content-center lg:px-8"
              // disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
    </UserLayout>
  );
}
