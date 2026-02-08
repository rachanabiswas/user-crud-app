"use client";

import deleteUser from "@/server/deleteUser";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

type UserDeleteButtonProps = {
	userId: string;
};

const UserDeleteButton = ({ userId }: UserDeleteButtonProps) => {
	const [loading, setLoading] = useState(false);

	const { refresh } = useRouter();

	const deleteHandeler = async () => {
		setLoading(true);

		const { isSuccess, message } = await deleteUser(userId);

		if (isSuccess) {
			toast.success(message);

			refresh();
		} else {
			toast.error(message);
		}

		setLoading(false);
	};

	return (
		<Button
			type="button"
			disabled={loading}
			onClick={deleteHandeler}
			variant={"destructive"}
			className="cursor-pointer">
			{loading ? (
				<>
					<LoaderIcon className="animate-spin" /> Deleting..
				</>
			) : (
				<>
					<Trash2Icon /> Delete
				</>
			)}
		</Button>
	);
};

export default UserDeleteButton;
