import { PencilLineIcon } from "lucide-react";
import Link from "next/link";
import UserDeleteButton from "./Buttons/UserDeleteButton";
import { Button } from "./shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";

const UserCard = () => {
	return (
		<Card className="w-sm">
			<CardHeader>
				<CardTitle className="text-center text-3xl">Rayan Basu</CardTitle>
			</CardHeader>

			<CardContent className="grid grid-cols-3 place-items-center gap-4">
				<div className="col-span-3 text-2xl">example@gmail.com</div>
				<div className="col-span-1 place-self-end text-xl">Male</div>
				<div className="col-span-2 text-xl">+91 9876543210</div>
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
