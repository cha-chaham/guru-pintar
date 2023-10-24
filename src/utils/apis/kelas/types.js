import * as z from "zod";

const kelasSchema = z.object({
  id: z.number().optional(),
  kelasName: z.string().min(1, { message: "Nama kelas harus dimasukkan" }),
  kelasLevel: z.string().min(1, { message: "Tingkat kelas harus ditambahkan" }),
  kelasDay: z.string().min(1, { message: "Hari pelajaran harus diisi" }),
  kelasTime: z.string().min(1, { message: "Jam pelajaran harus diisi" }),
});

const studentSchema = z.object({
  id: z.number().optional(),
  classStudent: z.string().min(1, { message: "Nama kelas harus dimasukkan" }),
});

export { kelasSchema, studentSchema };
