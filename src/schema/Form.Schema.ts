import z from "zod";

export const contact = z.object({
  firstname: z.string({ message: "This should not be blank" }),
  lastname: z.string({ message: "This should not be blank" }),
  email: z.string().email({ message: "Invalid email Address" }),
  query_Description: z.string({ message: "This should not be blank" }),
});
