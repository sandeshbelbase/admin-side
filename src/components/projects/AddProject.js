import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Common/form/CustomInput/CustomInput";
import CustomSelect from "../Common/form/CustomSelect/CustomSelect";
import CustomTextarea from "../Common/form/CustomTextarea/CustomTextarea";
import { Grid } from "@mui/material";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProjectForm from "./ProjectForm";
import { useNavigate } from "react-router-dom";

const schema = yup
	// .object()
	.object({
		name: yup.string().required("*this business category"),
		duration_type: yup.string().required("* please select duration type"),
		department: yup.string().required("* please select department"),

		duration: yup.string().required("*this field is required"),
		manager: yup.string().required("this field is required"),
		cost: yup.string().required("* this field is required"),
		expiry: yup.string().required("*expiry date is required"),

		desc: yup
			.string()

			.required("*enter your email address"),
	})
	.required();

const AddProject = () => {
	const navigate = useNavigate();
	const defaultValues = {
		name: "",
		duration_type: "month",
		duration: "",
		manager: "",
		cost: "",
		expiry: "",
		desc: "",
		department: "",
	};

	const {
		handleSubmit,
		control,
		watch,
		setValue,
		formState: { errors },
	} = useForm({ defaultValues, resolver: yupResolver(schema) });

	const submit = (values) => {
		axios.post("http://localhost:3003/project", values);
		console.log("valuesaaaaaa", values);
		navigate("/");
	};

	return (
		<>
			<ProjectForm
				control={control}
				buttonName='Add'
				submit={submit}
				defaultValues={defaultValues}
				handleSubmit={handleSubmit}
				watch={watch}
				errors={errors}
				setValue={setValue}
			/>
		</>
	);
};

export default AddProject;
