import Layout from "@/components/layout";

import { Button } from "@/components/button";
import CountUp from "react-countup";
import {
  RiSchoolFill,
  RiTeamFill,
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { PiStudentBold, PiGearBold, PiShareNetworkBold } from "react-icons/pi";
import { TestimoniCard, BenefitsCard } from "@/components/card";
import { useTheme } from "@/utils/contexts/theme";
import { toast } from "react-toastify";

function handleEmail(event) {
  event.preventDefault();
  toast.success("Tim Kami Akan Segera Menghubungui Anda!", {
    autoClose: 2000,
    hideProgressBar: false,
    closeButton: false,
  });
}

export default function Index() {
  const { theme } = useTheme();
  document.title = "Beranda";
  return (
    <Layout>
      <div className="w-full bg-[#2C44BC] px-12 py-[3rem] dark:bg-base-300">
        {/* Beranda */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 items-center"
          id="beranda"
        >
          <div className="hidden md:block">
            <img src="/Hero-Img.png" alt="" />
          </div>
          <div className="text-center md:text-start">
            <p className="font-bold text-4xl text-white xl:text-6xl">
              Mengoptimalkan Manajemen Kelas dengan Aplikasi Inovatif Kami
            </p>
            <p className="mt-2 text-white xl:text-xl">
              Siap untuk merevolusi cara Anda melacak kehadiran siswa?
              Bergabunglah dengan Guru Pintar hari ini dan alami manfaat
              manajemen kelas yang efisien.
            </p>
            <a href="#emailAction">
              {" "}
              <Button
                label="Coba Sekarang!"
                className="bg-[#ECDC44] text-[#2C44BC] rounded-full font-bold mt-4 hover:bg-[#d4c63d] transition-colors ease-in"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Collaboration */}
      <div
        id="collaboration"
        className="w-full bg-base-200 py-12 px-8 md:px-24 text-center"
      >
        <p className="text-xl">Telah dipercaya lebih dari</p>
        <p className="font-bold text-2xl">
          <CountUp end={350} duration={4} /> Guru dan{" "}
          <CountUp end={45} duration={4} /> Sekolah seluruh Indonesia
        </p>
        <div className="mt-4">
          <p className="text-medium">Dan Berkolaborasi Bersama</p>
          <div className="grid grid-cols-2 gap-12 mt-4">
            <div className="grid justify-items-end">
              <img className="w-32" src="/logo-PGRI.png" alt="" />
            </div>
            <div>
              <img className="w-32" src="/logo-Kemendikbud.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div id="aboutUs" className="w-full bg-base-300 py-12 px-8 md:px-24">
        {/* Tentang Kami */}
        <div className="text-center">
          <p className="font-bold text-2xl">Tentang Kami</p>
          <p className="text-medium">
            Kami, Guru Pintar, adalah tim yang berkomitmen untuk meningkatkan
            dunia pendidikan dengan inovasi dan teknologi. Dengan akar yang
            dalam dalam dunia pendidikan dan pengalaman teknologi, kami
            menyadari pentingnya kehadiran yang efisien dalam memastikan siswa
            mendapatkan pendidikan terbaik mereka.
          </p>
        </div>
        {/* Misi Kami */}
        <div className="text-center mt-12">
          <p className="font-bold text-2xl">Misi Kami</p>
          <p className="text-medium">
            Misi kami adalah membantu guru, sekolah, dan lembaga pendidikan
            memaksimalkan manajemen kehadiran sehingga mereka dapat memberikan
            pengalaman belajar yang lebih baik. Kami memahami bahwa kehadiran
            yang baik adalah pondasi untuk keberhasilan akademik, dan kami
            berusaha menjadikan proses ini lebih mudah, efisien, dan efektif.
          </p>
        </div>
        {/* Keunggulan Kami */}
        <div className="text-center mt-12">
          <p className="font-bold text-2xl">Keunggulan Kami</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 gap-5 mt-4 text-start">
            <BenefitsCard
              icon={RiSchoolFill}
              title="Pengalaman dalam Pendidikan"
              description="Tim kami terdiri dari pendidik berpengalaman yang memahami tantangan sehari-hari dalam manajemen kelas dan kehadiran siswa."
            />
            <BenefitsCard
              icon={PiStudentBold}
              title="Komitmen pada Keterlibatan Siswa"
              description="Kami percaya bahwa siswa yang lebih terlibat dalam pemantauan kehadiran cenderung meraih kesuksesan yang lebih besar."
            />
            <BenefitsCard
              icon={PiGearBold}
              title="Inovasi Berkelanjutan"
              description="Tim kami terdiri dari pendidik berpengalaman yang memahami tantangan sehari-hari dalam manajemen kelas dan kehadiran siswa."
            />
            <BenefitsCard
              icon={PiShareNetworkBold}
              title="Teknologi Terdepan"
              description="Kami menggabungkan teknologi terkini untuk menciptakan aplikasi yang intuitif dan bermanfaat bagi guru dan siswa."
            />
            <BenefitsCard
              icon={RiTeamFill}
              title="Kemitraan dengan Guru dan Sekolah"
              description="Kami terus berusaha berkolaborasi dengan komunitas pendidikan untuk memastikan aplikasi kami memenuhi kebutuhan unik mereka."
            />
          </div>
        </div>
      </div>
      {/* Testimoni */}
      <div
        className="w-full bg-[#F4ECDC] dark:bg-base-200 py-6 px-8 md:px-24"
        id="testimoni"
      >
        <p className="text-center font-bold text-2xl">Testimoni</p>
        <p className="text-center">Apa kata mereka tentang Guru Pintar ?</p>
        <div className="lg:px-28 xl:grid xl:grid-cols-2 gap-3">
          <TestimoniCard
            textTestimoni="Sebagai seorang guru, Guru Pintar telah menjadi penyelamat bagi saya. Pencatatan kehadiran menjadi begitu mudah, dan saya bisa fokus pada mengajar tanpa khawatir tentang administrasi."
            textUser="Ibu Siti, Guru Matematika"
          />
          <TestimoniCard
            textTestimoni="Aplikasi ini telah mengubah cara saya berinteraksi dengan orangtua. Notifikasi otomatis memberikan transparansi penuh, dan saya melihat peningkatan dalam keterlibatan orangtua."
            textUser="Bapak Rahmat, Guru Sejarah"
          />
          <TestimoniCard
            textTestimoni="Kami telah melihat peningkatan signifikan dalam tingkat kehadiran siswa sejak mengadopsi Guru Pintarsebagai solusi kami. Ini membantu kami menciptakan lingkungan belajar yang lebih efisien."
            textUser="Kepala Sekolah XYZ, Charkarta"
          />
          <TestimoniCard
            textTestimoni="Aplikasi ini adalah alat yang sangat berguna untuk manajemen sekolah kami. Kami mendapat visibilitas yang lebih besar tentang kehadiran siswa dan dapat dengan cepat mengidentifikasi masalah yang memerlukan perhatian."
            textUser="Kepala Sekolah ABC, Huchren"
          />
        </div>
      </div>
      {/* Email Input Action */}
      <div
        className="w-full bg-base-300 py-12 px-8 md:px-24 lg:px-36 xl:px-96"
        id="emailAction"
      >
        <div className="text-center mb-4">
          <p className="font-bold text-xl">
            Daftar Sekarang! Bergabunglah dan Nikmati Manfaatnya
          </p>
          <p className="text-sm">
            Kami berkomitmen untuk membantu Anda mencapai kelas yang lebih
            efisien, siswa yang lebih bertanggung jawab, dan pembelajaran yang
            lebih baik.
          </p>
        </div>
        <div className="form-control" onSubmit={handleEmail}>
          {/* TODO: ON SUBMIT PROCESS */}
          <form action="">
            <div className="input-group">
              <input
                type="Email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <button
                className="btn bg-[#2C44BC] hover:bg-[#375bd9]"
                type="submit"
              >
                <p className="font-medium text-white px-4">Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full py-10 px-8 bg-[#F4ECDC] dark:bg-base-300 lg:px-12 xl:px-32">
        <div className="grid grid-cols-1 grid-rows-3 gap-10 md:grid-cols-3 md:grid-rows-1 md:gap-5">
          <div className="flex justify-center gap-4 items-center md:gap-0 md:flex-col md:items-start">
            {theme === "light" ? (
              <img
                src="/logo/light/BaseLogo.png"
                alt=""
                className="w-24 md:w-32"
              />
            ) : (
              <img
                src="/logo/dark/BaseLogo-dark.png"
                alt=""
                className="w-24 md:w-32"
              />
            )}
            <p className="font-medium">
              Alamat: Jl. Pendidikan No. 123, Kota Charkarta <br />
              Telepon: (123) 456-7890 <br />
              Email: info@gurupintar.com
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Akses Cepat</p>
            <ul className="grid grid-cols-2 md:grid-cols-1">
              <li className="mb-2">
                <a href="">Beranda</a>
              </li>
              <li className="mb-2">
                <a href="">Tentang Kami</a>
              </li>
              <li className="mb-2">
                <a href="">Testimoni</a>
              </li>
              <li className="mb-2">
                <a href="">Login Akun</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Temukan kami di Sosial Media</p>
            <div className="flex gap-2 mt-2 md:gap-1 lg:gap-4 xl:gap-5">
              <div className="bg-base-100 rounded-full p-2">
                <RiFacebookFill size={25} color="#2C44BC" />
              </div>
              <div className="bg-base-100 rounded-full p-2">
                <RiInstagramFill size={25} color="#2C44BC" />
              </div>
              <div className="bg-base-100 rounded-full p-2">
                <RiTwitterXFill size={25} color="#2C44BC" />
              </div>
              <div className="bg-base-100 rounded-full p-2">
                <RiLinkedinBoxFill size={25} color="#2C44BC" />
              </div>
              <div className="bg-base-100 rounded-full p-2">
                <RiWhatsappFill size={25} color="#2C44BC" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
