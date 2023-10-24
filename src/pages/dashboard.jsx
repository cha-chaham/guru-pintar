import { React, useState, useEffect } from "react";

import { ClassCard } from "@/components/card";
import { useTheme } from "@/utils/contexts/theme";
import UserLayout from "@/components/userLayout";
import { Link, useNavigate } from "react-router-dom";
import { getKelas } from "@/utils/apis/kelas";
import { toast } from "react-toastify";
import { Spinner } from "@/components/loading";

export default function Dashboard() {
  const { theme } = useTheme();
  const [kelas, setKelas] = useState([]);
  const [loading, setIsLoading] = useState(false);
  document.title = "Dashboard";
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getKelas();
      setKelas(result);
    } catch (error) {
      toast.error(error.message, { autoClose: 1000, hideProgressBar: false });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserLayout>
      <div className="w-full bg-base-100 px-5 py-12 md:px-12 md:py-24 transtion ease-in duration-300">
        <div className="w-full mb-8">
          <p className="text-xl">Selamat Datang Kembali,</p>
          <p className="font-bold text-4xl">John Doe</p>
        </div>
        <div className="w-full">
          <p className="font-semibold text-2xl">Daftar Kelas</p>
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 py-4 gap-5 md:grid-cols-2">
              {kelas.map((item, index) => (
                <ClassCard
                  key={index}
                  title={`${item.kelasName} - ${item.kelasLevel}`}
                  description={`${item.kelasDay}, ${item.kelasTime}`}
                  url={`https://picsum.photos/720/720?${item.title}=${index}`}
                  index={item.id}
                  onClick={() => navigate(`/kelas/${item.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
}
