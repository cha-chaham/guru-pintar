import * as z from "zod";

const meetingSchema = z.object({
  id: z.number().optional(),
  // classStudent: z.string().min(1, { message: "Nama kelas harus dimasukkan" }),
  classMeetingName: z
    .string()
    .min(1, { message: "Nama kelas harus dimasukkan" }),
  classMeetingDate: z
    .string()
    .min(1, { message: "Nama kelas harus dimasukkan" }),
});

export { meetingSchema };
