import UserCard from "@/components/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js Starter Fullstack",
	description: "Production grade Fullstack Next.js starter template",
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
