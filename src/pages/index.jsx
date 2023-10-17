import Layout from "@/components/layout";

import Button from "@/components/button";
import CountUp from "react-countup";
import { RiSchoolFill, RiTeamFill } from "react-icons/ri";
import { PiStudentBold, PiGearBold, PiShareNetworkBold } from "react-icons/pi";
import BenefitsCard from "@/components/benefitsCard";
import {
  TestimoniCardRight,
  TestimoniCardLeft,
} from "@/components/testimoniCard";

export default function Index() {
  document.title = "Home";
  return (
    <Layout>
      <div className="w-full bg-[#2C44BC] px-12 py-[3rem]">
        {/* Beranda */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 items-center"
          id="beranda"
        >
          <div className="hidden md:block">
            <img src="/Hero-Img.png" alt="" />
          </div>
          <div className="text-center md:text-start">
            <p className="font-bold text-4xl text-white">
              Mengoptimalkan Manajemen Kelas dengan Aplikasi Inovatif Kami
            </p>
            <p className="mt-2 text-white">
              Siap untuk merevolusi cara Anda melacak kehadiran siswa?
              Bergabunglah dengan Guru Pintar hari ini dan alami manfaat
              manajemen kelas yang efisien.
            </p>
            <Button
              label="Coba Sekarang!"
              className="bg-[#ECDC44] text-[#2C44BC] rounded-full font-bold mt-4"
            />
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
      <div id="aboutUs" className="w-full bg-base-50 py-12 px-8 md:px-24">
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
      <div className="w-full bg-[#F4ECDC] dark:bg-base-300 py-6 px-8 md:px-24 lg:px-28">
        <p className="text-center font-bold text-2xl">Testimoni</p>
        <p className="text-center">Apa kata mereka tentang Guru Pintar ?</p>
        <div className="2xl:px-[30rem]">
          <TestimoniCardRight
            textTestimoni="Sebagai seorang guru, Guru Pintar telah menjadi penyelamat bagi saya. Pencatatan kehadiran menjadi begitu mudah, dan saya bisa fokus pada mengajar tanpa khawatir tentang administrasi."
            textUser="Ibu Siti, Guru Matematika"
          />
          <TestimoniCardLeft
            textTestimoni="Aplikasi ini telah mengubah cara saya berinteraksi dengan orangtua. Notifikasi otomatis memberikan transparansi penuh, dan saya melihat peningkatan dalam keterlibatan orangtua."
            textUser="Bapak Rahmat, Guru Sejarah"
          />
          <TestimoniCardRight
            textTestimoni="Kami telah melihat peningkatan signifikan dalam tingkat kehadiran siswa sejak mengadopsi Guru Pintarsebagai solusi kami. Ini membantu kami menciptakan lingkungan belajar yang lebih efisien."
            textUser="Kepala Sekolah XYZ, Charkarta"
          />
          <TestimoniCardLeft
            textTestimoni="Aplikasi ini adalah alat yang sangat berguna untuk manajemen sekolah kami. Kami mendapat visibilitas yang lebih besar tentang kehadiran siswa dan dapat dengan cepat mengidentifikasi masalah yang memerlukan perhatian."
            textUser="Kepala Sekolah ABC, Huchren"
          />
        </div>
      </div>
      {/* Email Input Action */}
      <div className="w-full bg-base-100 py-6 px-8 md:px-24">
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
        <div className="form-control">
          <form action="">
            <div className="input-group">
              <input
                type="Email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <button className="btn bg-[#2C44BC]">
                <p className="font-medium text-white px-4">Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
