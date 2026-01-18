import UserCard from "@/components/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "All Users | User CRUD",
	description: "All users page of User CRUD application",
};

const page = () => {
	return (
		<section className="grid grid-cols-3 place-items-center gap-4">
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
		</section>
	);
};

export default page;
