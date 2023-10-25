import * as z from "zod";

const meetingSchema = z.object({
  id: z.number().optional(),
  meeting: z.array(
    z.object({
      studentName: z.string().optional(),
      presence: z.string().optional(),
    })
  ),
  kelasMeetingName: z
    .string()
    .min(1, { message: "Nama kelas harus dimasukkan" }),
  kelasMeetingDate: z
    .string()
    .min(1, { message: "Tanggal kelas harus dimasukkan" }),
});

export { meetingSchema };
