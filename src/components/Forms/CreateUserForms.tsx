"use client";

import { userFormSchema, UserFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	LoaderIcon,
	RotateCcwIcon,
	SendIcon,
	SparklesIcon,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../shadcnui/select";
import { Separator } from "../shadcnui/separator";

const CreateUserForms = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			gender: "",
			phNumber: "",
		},
		mode: "all",
	});

	const submitHandeler = async (data: UserFormType) => {
		await new Promise((r) => setTimeout(r, 1000));

		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandeler)}
			className="grid grid-cols-2 gap-4"
			noValidate>
			<Controller
				name="firstName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>First Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your first name"
							autoComplete="given-name"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="lastName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your last name"
							autoComplete="family-name"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="gender"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Select gender</FieldLabel>
						<Select
							name={field.name}
							value={field.value}
							onValueChange={field.onChange}>
							<SelectTrigger
								id={field.name}
								aria-invalid={fieldState.invalid}>
								<SelectValue placeholder="Select your gender" />
							</SelectTrigger>
							<SelectContent position="item-aligned">
								<SelectItem value="male">Mals 👨🏻</SelectItem>
								<SelectItem value="female">Female 👧🏻</SelectItem>
							</SelectContent>
						</Select>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="phNumber"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Phone number</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your phone number"
							autoComplete="tel"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<Field
						className="col-span-2"
						data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Email</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your email"
							autoComplete="email"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				disabled={isSubmitting}
				className="col-span-2 cursor-pointer">
				{isSubmitting ? (
					<>
						<LoaderIcon className="animate-spin" /> Submitting..
					</>
				) : (
					<>
						<SendIcon /> Submit
					</>
				)}
			</Button>

			<Separator className="col-span-2" />

			<Button
				type="reset"
				onClick={() => reset()}
				variant={"destructive"}
				className="cursor-pointer">
				<RotateCcwIcon /> Reset
			</Button>

			<Button
				type="button"
				variant={"outline"}
				className="cursor-pointer">
				<SparklesIcon /> Genarate
			</Button>
		</form>
	);
};

export default CreateUserForms;
