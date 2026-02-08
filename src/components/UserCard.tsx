import { PencilLineIcon } from "lucide-react";
import Link from "next/link";
import { User } from "../../generated/prisma/client";
import UserDeleteButton from "./Buttons/UserDeleteButton";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";

type UserCardProps = {
	userInfo: User;
};

const UserCard = ({ userInfo }: UserCardProps) => {
	const { firstName, lastName, email, gender, phNumber } = userInfo;

	return (
		<Card className="w-sm">
			<CardHeader>
				<CardTitle className="text-center text-3xl">
					{firstName} {lastName}
				</CardTitle>
			</CardHeader>

			<CardContent className="grid grid-cols-3 place-items-center gap-4">
				<div className="col-span-3 text-xl">{email}</div>
				<div className="col-span-1 place-self-end text-xl capitalize">
					{gender}
				</div>
				<div className="col-span-2 text-xl">+91 {phNumber}</div>
			</CardContent>

			<CardFooter className="grid grid-cols-2 gap-4">
				<UserDeleteButton />

				<Button
					variant={"secondary"}
					className="cursor-pointer"
					asChild>
					<Link href={`/abcd`}>
						<PencilLineIcon /> Edit
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default UserCard;
