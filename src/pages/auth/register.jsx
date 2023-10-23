import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Input, RadioGroup, Select } from "@/components/input";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { userRegister, registerSchema } from "@/utils/apis/auth/";
import { Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function handleRegister(data) {
    try {
      const result = await userRegister(data);
      toast.success(result.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Layout>
      <div className="w-full h-full lg:h-screen bg-[#2C44BC] px-12 py-[3rem] dark:bg-base-300">
        <div className="bg-base-100 rounded-3xl flex h-full w-full flex-col md:flex-row xl:h-full">
          <div className="w-1/2 bg-cover bg-gradient-to-tl from-[#2d9c71] to-[#18644a] rounded-l-3xl hidden lg:block">
            {" "}
          </div>
          <div className="justify-center h-full w-full py-12 px-8 md:px-10 flex items-center md:items-start flex-col ">
            <div className="font-bold text-4xl mb-5">Registrasi Akun</div>
            <form
              aria-label="form-register"
              onSubmit={handleSubmit(handleRegister)}
              className="w-full h-full lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-2"
            >
              <div>
                <Input
                  id="input-fullName"
                  aria-label="input-fullName"
                  label="Nama Lengkap"
                  name="fullName"
                  register={register}
                  error={errors.fullName?.message}
                  type="text"
                />
              </div>
              <div className="col-start-1 row-start-2">
                {" "}
                <RadioGroup
                  id="input-jenisKelamin"
                  aria-label="input-jenisKelamin"
                  label="Jenis Kelamin"
                  name="gender"
                  register={register}
                  error={errors.gender?.message}
                  options={["Pria", "Wanita"]}
                />
              </div>
              <div className="col-start-1 row-start-3">
                <Select
                  label="Tingkat Pendidikan Yang Diampuh"
                  placeholder="Silahkan Dipilih"
                  options={[
                    "Sekolah Dasar/Sederajat",
                    "Sekolah Menengah Pertama/Sederajat",
                    "Sekolah Menengah Atas/Sederajat",
                  ]}
                  name="school"
                  aria-label="input-school"
                  register={register}
                />
              </div>
              <div className="col-start-1 row-start-4">
                <Input
                  id="input-schoolName"
                  aria-label="input-schoolName"
                  label="Nama Sekolah"
                  name="schoolName"
                  register={register}
                  error={errors.schoolName?.message}
                  type="text"
                />
              </div>
              <div className="col-start-2 row-start-1">
                <Input
                  id="input-username"
                  aria-label="input-username"
                  label="Username"
                  name="username"
                  register={register}
                  error={errors.username?.message}
                />
              </div>
              <div className="col-start-2 row-start-2">
                {" "}
                <Input
                  id="input-password"
                  aria-label="input-password"
                  label="Password"
                  name="password"
                  register={register}
                  error={errors.password?.message}
                  type="password"
                />
              </div>
              <div className="col-start-2 row-start-3">
                <Input
                  id="input-repassword"
                  aria-label="input-repassword"
                  label="Retype Password"
                  name="repassword"
                  register={register}
                  error={errors.repassword?.message}
                  type="password"
                />
              </div>
              <div className="col-span-2 row-start-5">
                {" "}
                <Button
                  aria-label="btn-submit"
                  label="Submit"
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
                <div className="mt-3">
                  Belum Punya Akun ?{" "}
                  <Link to="/register" className="font-bold text-[#375bd9]">
                    Daftar Sekarang!
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
