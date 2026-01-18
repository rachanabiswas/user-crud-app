import CreateUserForms from "@/components/Forms/CreateUserForms";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create User | User CRUD",
	description: "Create user page of User CRUD application",
};

const page = () => {
	return (
		<section className="grid h-[84dvh] place-items-center">
			<Card className="w-md">
				<CardHeader>
					<CardTitle className="text-center text-2xl">Create User</CardTitle>
				</CardHeader>

				<CardContent>
					<CreateUserForms />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
