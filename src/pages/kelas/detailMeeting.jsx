import { React } from "react";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

import UserLayout from "@/components/userLayout";
import Button from "@/components/button";
import { toast } from "react-toastify";
import { MeetingCard } from "@/components/card";

export default function DetailMeeting() {
  const dummyAlpa = ["Taufik Rahman", "Wulan Sari"];

  const dummyHadir = [
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
  ];

  const dummySakit = ["Putri Amelia", "Rudi Hartono", "Siti Aisyah"];
  const dummyIzin = ["Nina Rahmawati", "Opik Pratama"];

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
              Perang Diponegoro dan Sejarah VOC
            </p>
            <p className="text-xl mt-2">Senin, 25 September 2023</p>
          </div>
          <div id="header-buttonAction" className="flex items-start gap-3">
            <div
              className="rounded-full bg-base-300 p-2 cursor-pointer"
              onClick={() =>
                navigate(`/edit-meeting/${params.idKelas}/${params.idMeeting}`)
              }
            >
              <RiEdit2Line size={25} />
            </div>
            <div
              className="rounded-full bg-base-300 p-2 cursor-pointer"
              onClick={() => {
                toast.success("Kelas Berhasil Dihapus", { autoClose: 1000 });
                setTimeout(() => {
                  navigate("/dashboard");
                }, 1500);
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
        </div>
        <div
          id="listAbsence"
          className="mt-2 grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4"
        >
          <div id="hadir" className="h-full">
            <p className="font-semibold text-xl mb-2">Hadir</p>
            <div className="bg-[#1C7454] dark:bg-base-300 px-5 py-4 rounded-2xl">
              {dummyHadir.map((item, index) => (
                <div
                  className="rounded-full px-4 bg-base-100 py-2 mb-2"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="sakit-izin" className="h-full">
            <p className="font-semibold text-xl mb-2">Sakit/Izin</p>
            <div className="bg-[#ECDC44] dark:bg-base-300 px-5 py-5 rounded-2xl">
              <div className="divider font-semibold">Sakit</div>
              {dummySakit.map((item, index) => (
                <div
                  className="rounded-full px-4 bg-base-100 py-2 my-2"
                  key={index}
                >
                  {item}
                </div>
              ))}
              <div className="divider font-semibold">Izin</div>
              {dummyIzin.map((item, index) => (
                <div
                  className="rounded-full px-4 bg-base-100 py-2 my-2"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="alpa">
            <p className="font-semibold text-xl mb-2">Alpa</p>
            <div className="bg-[#C42414] dark:bg-base-300 px-5 py-5 rounded-2xl">
              {dummyAlpa.map((item, index) => (
                <div
                  className="rounded-full px-4 bg-base-100 py-2 my-2"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
