import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select the semester name" }),
  year: z.string({ required_error: "Please select year" }),
  startMonth: z.string({ required_error: "Please select startMonth" }),
  endMonth: z.string({ required_error: "Please select endMonth" }),
});
