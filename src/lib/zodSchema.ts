import z from "zod";

export const userFormSchema = z.object({
	firstName: z.string().min(2, "First name should be minimum 2 char. long"),
	lastName: z.string().min(3, "Last name should be minimum 3 char. long"),
	email: z.email("Enter a valid email"),
	gender: z.string().min(4, "Select a gender"),
	phNumber: z.string().length(10, "Enter a valid number"),
});

export type UserFormType = z.infer<typeof userFormSchema>;
