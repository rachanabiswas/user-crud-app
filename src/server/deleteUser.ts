"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const deleteUser = async (userId: string) => {
	try {
		await prisma.user.delete({
			where: {
				id: userId,
			},
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "User deleted successfully",
		};
	} catch (error) {
		console.log(error);

		return {
			isSuccess: false,
			message: "User deletation failed",
		};
	}
};

export default deleteUser;
