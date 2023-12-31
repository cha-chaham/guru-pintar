import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(1, { message: "Nama Lengkap harus diisi" }),
    gender: z
      .string({ invalid_type_error: "Jenis Kelamin harus diisi" })
      .min(1, { message: "Nama Lengkap harus diisi" }),
    school: z.string(),
    schoolName: z.string().min(1, { message: "Nama Sekolah Perlu Diisi" }),
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(6, { message: "Password is required" }),
    repassword: z.string().min(6, { message: "Retype password is required" }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match",
    path: ["repassword"],
  });
