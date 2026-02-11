"use server";

import prisma from "@/lib/database/dbClient";
import { UserFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const updateUser = async (data: UserFormType, userId: string) => {
	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data,
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "User updated successfully",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User update failed",
		};
	}
};

export default updateUser;
