import { Card, CardContent } from "@/components/shadcnui/card";
import UserCard from "@/components/UserCard";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "All Users | User CRUD",
	description: "All users page of User CRUD application",
};

const page = async () => {
	const allUsers = await prisma.user.findMany();

	if (allUsers.length === 0) {
		return (
			<section className="grid h-[84dvh] place-items-center">
				<Card>
					<CardContent className="px-16 py-8 text-3xl">
						No user found ☹️
					</CardContent>
				</Card>
			</section>
		);
	}

	return (
		<section className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
			{allUsers.map((item) => (
				<UserCard
					key={item.id}
					userInfo={item}
				/>
			))}
		</section>
	);
};

export default page;
