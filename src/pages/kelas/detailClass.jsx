import { React, useEffect, useState } from "react";
import {
  RiUserAddLine,
  RiEdit2Line,
  RiDeleteBin6Line,
  RiArrowLeftLine,
} from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

import UserLayout from "@/components/userLayout";
import { Button, ButtonBack } from "@/components/button";
import { toast } from "react-toastify";
import { MeetingCard } from "@/components/card";
import swal from "@/utils/apis/swal";
import { deletelKelas, getDetailKelas } from "@/utils/apis/kelas";
import { getMeetinglKelas } from "@/utils/apis/meeting";
import { Spinner } from "@/components/loading";

export default function DetailClass() {
  document.title = `Detail Kelas`;
  const navigate = useNavigate();
  const params = useParams();
  const [kelas, setKelas] = useState([]);
  const [meeting, setMeeting] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
    fetchMeeting();
  }, []);

  async function fetchMeeting() {
    try {
      setIsLoading(true);
      const result = await getMeetinglKelas();
      const filteredData = result.filter((item) => item.idKelas === params.id);
      setMeeting(filteredData);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function onClickDelete(id) {
    try {
      await deletelKelas(id);
      toast.success("Berhasil Menghapus Data");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getDetailKelas(+params.id);
      setKelas(result);
    } catch (error) {
      toast.error(error.message, { autoClose: 1000, hideProgressBar: false });
    } finally {
      setIsLoading(false);
    }
  }

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
            {loading ? (
              <div className="animate-pulse">
                <p className="h-2 mb-8 bg-slate-700 rounded w-96"></p>
                <p className="h-2 bg-slate-700 rounded w-64"></p>
              </div>
            ) : (
              <div className="flex flex-row items-start gap-6">
                <div>
                  <ButtonBack />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-3xl">
                    {kelas.kelasName} - {kelas.kelasLevel}
                  </p>
                  <p className="text-xl mt-2">
                    {kelas.kelasDay}, {kelas.kelasTime}
                  </p>
                </div>
              </div>
            )}
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
                      onClickDelete(params.id);
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
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <div>
              {meeting.length > 0 ? (
                meeting.map((item, index) => (
                  <MeetingCard
                    title={item.namaMateri}
                    description={item.kelasDate}
                    key={index}
                    onClick={() => navigate(`/kelas/${params.id}/${item.id}`)}
                  />
                ))
              ) : (
                <p className="font-semibold text-xl divider">
                  Anda Belum Melakukan Pertemuan Apapun
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
}
