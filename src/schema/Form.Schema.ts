import z from "zod";

export const contact = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid email Address" }),
  query: z.string(),
  query_Description: z.string(),
});
