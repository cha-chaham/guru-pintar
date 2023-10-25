import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Input } from "@/components/input";
import Layout from "@/components/layout";
import { Button } from "@/components/button";
import { useToken } from "@/utils/contexts/token";
import { userLogin, loginSchema } from "@/utils/apis/auth/";
import { Link } from "react-router-dom";

export default function Login() {
  document.title = `Login Akun`;
  const { changeToken } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      toast.success("Successfully login");
      changeToken(JSON.stringify(result.payload));
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Layout>
      <div className="w-full h-screen bg-[#2C44BC] px-12 py-[3rem] dark:bg-base-300">
        <div className="bg-base-100 rounded-3xl flex h-full w-full flex-col md:flex-row xl:h-full">
          <div className="w-1/2 rounded-l-3xl hidden md:block">
            <img
              src="https://picsum.photos/3600"
              alt=""
              className="rounded-l-3xl object-cover h-full w-full"
            />
          </div>
          <div className="justify-center h-full w-full px-8 md:px-10 md:w-1/2 flex items-center md:items-start flex-col ">
            <div className="font-bold text-4xl mb-12">Login</div>
            <form
              aria-label="form-login"
              onSubmit={handleSubmit(handleLogin)}
              className="w-full"
            >
              <Input
                id="input-username"
                aria-label="input-username"
                label="Username"
                name="username"
                register={register}
                error={errors.username?.message}
              />
              <Input
                id="input-password"
                aria-label="input-password"
                label="Password"
                name="password"
                register={register}
                error={errors.password?.message}
                type="password"
              />
              <div className="mt-12">
                <Button
                  aria-label="btn-submit"
                  label="Masuk"
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in h-full px-5 place-content-center lg:px-8"
                />
              </div>
            </form>
            <div className="mt-4 md:mt-12 lg:mt-24">
              Belum Punya Akun ?{" "}
              <Link to="/register" className="font-bold text-[#375bd9]">
                Daftar Sekarang!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
