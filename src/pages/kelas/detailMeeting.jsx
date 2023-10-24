import { React, useEffect, useState } from "react";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

import UserLayout from "@/components/userLayout";
import { toast } from "react-toastify";
import { getDetailMeeting } from "@/utils/apis/meeting/api";
import { Spinner } from "@/components/loading";
import { ButtonBack } from "@/components/button";

export default function DetailMeeting() {
  document.title = `Detail Pertemuan`;
  const [meeting, setMeeting] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailMeeting(+params.idMeeting);
      setMeeting(result);
      setStudents(result.students);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const dummyAlpa = ["Taufik Rahman", "Wulan Sari"];

  const dummyHadir = ["Putri Amelia", "Rudi Hartono", "Siti Aisyah"];
  const dummySakit = ["Putri Amelia", "Rudi Hartono", "Siti Aisyah"];
  const dummyIzin = ["Nina Rahmawati", "Opik Pratama"];

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
        {loading ? (
          <div className="animate-pulse">
            <p className="h-2 mb-8 bg-slate-700 rounded w-96"></p>
            <p className="h-2 bg-slate-700 rounded w-64"></p>
          </div>
        ) : (
          <div id="headerClass" className="flex flex-row justify-between">
            <div id="header-title" className="flex gap-4 items-center mb-6">
              <ButtonBack />
              <div className="flex flex-col">
                <p className="font-bold text-3xl">{meeting.namaMateri}</p>
                <p className="text-xl mt-2">{meeting.kelasDate}</p>
              </div>
            </div>
            <div id="header-buttonAction" className="flex items-start gap-3">
              <div
                className="rounded-full bg-base-300 p-2 cursor-pointer"
                onClick={() =>
                  navigate(
                    `/edit-meeting/${params.idKelas}/${params.idMeeting}`
                  )
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
        )}
        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="">
            <div
              id="detailClass"
              className="mt-8 flex flex-row justify-between"
            >
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
                  {students.map((item, index) => (
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
        )}
      </div>
    </UserLayout>
  );
}
