"use server";

import prisma from "@/lib/database/dbClient";
import { UserFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createUser = async (data: UserFormType) => {
	try {
		await prisma.user.create({ data });

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "User created successfully",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User creation failed",
		};
	}
};

export default createUser;
