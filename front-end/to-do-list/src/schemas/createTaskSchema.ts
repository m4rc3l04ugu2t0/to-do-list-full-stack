import { z } from "zod";

export const createTaskSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(1, "Title is required")
    .max(50)
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ");
    }),
  description: z.string().min(1, "Description is required").max(100),
});

export type CreateTaskProp = z.infer<typeof createTaskSchema>;
