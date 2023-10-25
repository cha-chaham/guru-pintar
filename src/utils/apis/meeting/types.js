import * as z from "zod";

const meetingSchema = z.object({
  id: z.number().optional(),
  presenceData: z.array(
    z.object({
      studentName: z.string(),
      presence: z.string(),
    })
  ),
  classMeetingName: z
    .string()
    .min(1, { message: "Nama kelas harus dimasukkan" }),
  classMeetingDate: z
    .string()
    .min(1, { message: "Tanggal kelas harus dimasukkan" }),
});

export { meetingSchema };
