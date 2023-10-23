import { React } from "react";
import { RiUserAddLine, RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

import UserLayout from "@/components/userLayout";
import Button from "@/components/button";
import { toast } from "react-toastify";
import { MeetingCard } from "@/components/card";
import swal from "@/utils/apis/swal";

export default function DetailClass() {
  const dummyMeeting = [
    {
      title: "Pertemuan ke-1",
      description: "Pengantar Ilmu Pengetahuan Sosial",
    },
    { title: "Pertemuan ke-2", description: "Sejarah Peradaban Manusia" },
    { title: "Pertemuan ke-3", description: "Geografi dan Peta Dunia" },
    { title: "Pertemuan ke-4", description: "Sistem Pemerintahan" },
    { title: "Pertemuan ke-5", description: "Ekonomi Global" },
    { title: "Pertemuan ke-6", description: "Kebudayaan dan Warisan Budaya" },
    { title: "Pertemuan ke-7", description: "Pendidikan Kewarganegaraan" },
    { title: "Pertemuan ke-8", description: "Hubungan Antarbangsa" },
    {
      title: "Pertemuan ke-9",
      description: "Pembangunan dan Pembangunan Berkelanjutan",
    },
    { title: "Pertemuan ke-10", description: "Tantangan Sosial Masa Kini" },
  ];
  const navigate = useNavigate();
  const params = useParams();
  return (
    <UserLayout>
      <div className="h-64 lg:h-64 xl:h-96 bg-base-100">
        <img
          src="https://picsum.photos/3600"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-12 transtion ease-in duration-300">
        <div id="headerClass" className="flex flex-row justify-between">
          <div id="header-title">
            <p className="font-bold text-3xl">
              Ilmu Pengetahuan Sosial - Kelas IX SMP
            </p>
            <p className="text-xl mt-2">Senin 09.00 - 11.00</p>
          </div>
          <div id="header-buttonAction" className="flex items-start gap-3">
            <div
              className="rounded-full bg-base-300 p-2 cursor-pointer"
              onClick={() => navigate(`/kelas/students/${params.id}`)}
            >
              <RiUserAddLine size={25} />
            </div>
            <div
              className="rounded-full bg-base-300 p-2 cursor-pointer"
              onClick={() => navigate(`/edit-kelas/${params.id}`)}
            >
              <RiEdit2Line size={25} />
            </div>
            <div
              className="rounded-full bg-base-300 p-2 cursor-pointer"
              onClick={() => {
                swal
                  .fire({ title: "Apakah Anda Yakin ?", icon: "warning" })
                  .then((result) => {
                    if (result.isConfirmed) {
                      swal.fire({
                        title: "Berhasil Dihapus",
                        icon: "success",
                        showConfirmButton: false,
                        cancelButtonText: "Close",
                      });
                      setTimeout(() => {
                        navigate("/dashboard");
                      }, 1500);
                    }
                  });
              }}
            >
              <RiDeleteBin6Line size={25} />
            </div>
          </div>
        </div>
        <div id="detailClass" className="mt-8 flex flex-row justify-between">
          <div id="headerDetail">
            <p className="font-bold text-2xl">Daftar Pertemuan</p>
          </div>
          <div id="actionDetail">
            <Button
              label="Tambah Pertemuan"
              className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in h-full w-full px-5 place-content-center lg:px-8"
              onClick={() => navigate(`/register-meeting/${params.id}`)}
            />
          </div>
        </div>
        <div id="listMeeting" className="mt-8">
          {dummyMeeting.map((item, index) => (
            <MeetingCard
              title={item.title}
              description={item.description}
              key={index}
              indexClass={params.id}
              indexMeeting={index}
            />
          ))}
        </div>
      </div>
    </UserLayout>
  );
}
