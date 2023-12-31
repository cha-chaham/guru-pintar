import { React, useState, useEffect } from "react";
import UserLayout from "@/components/userLayout";
import { Input } from "@/components/input";
import { Button, ButtonBack } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/utils/apis/kelas";
import { toast } from "react-toastify";
import { createStudentsKelas, getDetailKelas } from "@/utils/apis/kelas";
import { useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin6Line, RiArrowLeftLine } from "react-icons/ri";
import swal from "@/utils/apis/swal";

export default function Students() {
  document.title = "Siswa";
  const params = useParams();
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailKelas(+params.id);
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
  } = useForm({ resolver: zodResolver(studentSchema) });

  function onSubmit(data) {
    const newStudentName = data.kelasStudents;
    setStudentData([...studentData, newStudentName]);
    reset();
  }

  async function onSaveData(data) {
    try {
      await createStudentsKelas({ data, id: params.id });
      fetchData();
      toast.success("Nama-nama Berhasil Disimpan");
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  }

  function deleteStudent(index) {
    const updatedStudentData = [...studentData];
    updatedStudentData.splice(index, 1);
    setStudentData(updatedStudentData);
  }

  function backButton() {
    swal
      .fire({
        title: "Sudahkah anda menyimpan daftar siswa anda ?",
        icon: "danger",
        showConfirmButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          onSaveData(studentData);
        }
      });
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="flex gap-4 items-center justify-between mb-6">
          <div className="flex gap-4 items-center mb-6">
            <button
              className="rounded-full bg-base-300 p-2 cursor-pointer"
              onClick={backButton}
            >
              <RiArrowLeftLine size={25} />
            </button>
            <p className="font-bold text-3xl">Siswa</p>
          </div>
          <Button
            label="Simpan Daftar Murid"
            type="submit"
            className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in mt-1 px-5 place-content-center lg:px-8"
            onClick={() => onSaveData(studentData)}
          />
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-8">
              <Input
                aria-label="input-class-student"
                label="Nama Siswa"
                name="kelasStudents"
                register={register}
                error={errors.kelasStudents?.message}
              />
              <Button
                label="Tambah Daftar Murid"
                type="submit"
                className="text-[#2C44BC] bg-slate-100 rounded-full font-bold hover:bg-slate-200 transition-colors ease-in mt-8 px-5 place-content-center lg:px-8 w-64"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-xl lg:text-2xl mb-4">Daftar Siswa</p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {studentData.length > 0 ? (
              studentData.map((item, index) => (
                <div
                  className="rounded-full px-6 py-4 bg-base-300 flex justify-between items-center font-semibold"
                  key={index}
                >
                  {item}
                  <button onClick={() => deleteStudent(index)}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              ))
            ) : (
              <p className="font-semibold text-xl col-span-4 divider text-center">
                Belum Ada Murid Ditambahkan
              </p>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
