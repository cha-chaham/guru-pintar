import * as z from "zod";

const kelasSchema = z.object({
  id: z.number().optional(),
  className: z.string().min(1, { message: "Nama kelas harus dimasukkan" }),
  classLevel: z.string().min(1, { message: "Tingkat kelas harus ditambahkan" }),
  classDay: z.string().min(1, { message: "Hari pelajaran harus diisi" }),
  classTime: z.string().min(1, { message: "Jam pelajaran harus diisi" }),
});

const studentSchema = z.object({
  id: z.number().optional(),
  // classStudent: z.string().min(1, { message: "Nama kelas harus dimasukkan" }),
  classMeetingName: z
    .string()
    .min(1, { message: "Nama kelas harus dimasukkan" }),
  classMeetingDate: z
    .string()
    .min(1, { message: "Nama kelas harus dimasukkan" }),
});

export { kelasSchema, studentSchema };
