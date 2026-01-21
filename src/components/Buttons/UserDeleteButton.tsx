"use client";

import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "../shadcnui/button";

const UserDeleteButton = () => {
	const [loading, setLoading] = useState(false);

	const deleteHandeler = async () => {
		setLoading(true);

		await new Promise((r) => setTimeout(r, 1000));

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
