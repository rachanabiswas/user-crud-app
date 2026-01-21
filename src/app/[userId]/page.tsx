import UpdateUserForms from "@/components/Forms/UpdateUserForms";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

type UpdatePageProps = {
	params: Promise<{ userId: string }>;
};

export const metadata: Metadata = {
	title: "Update User | User CRUD",
	description: "Update user page of User CRUD application",
};

const page = async ({ params }: UpdatePageProps) => {
	const { userId } = await params;

	return (
		<section className="grid h-[84dvh] place-items-center">
			<Card className="w-md">
				<CardHeader>
					<CardTitle className="text-center text-2xl">Update User</CardTitle>
				</CardHeader>

				<CardContent>
					<UpdateUserForms />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
