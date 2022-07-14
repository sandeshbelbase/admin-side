import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Common/form/CustomInput/CustomInput";
import CustomSelect from "../Common/form/CustomSelect/CustomSelect";
import CustomTextarea from "../Common/form/CustomTextarea/CustomTextarea";
import { Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProjectForm from "./ProjectForm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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

const EditProject = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [singleProject, setSingleProject] = useState([]);
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
		console.log("valuesaaaaaa", values);
		axios.put(`http://localhost:3003/project/${id}`, values);
		navigate("/");
	};

	useEffect(() => {
		id &&
			axios.get(`http://localhost:3003/project/${id}`).then((response) => {
				setSingleProject(response);
			});
	}, [id]);
	console.log("singlePor", singleProject);
	useEffect(() => {
		setValue("name", singleProject?.data?.name);
		setValue("duration_type", singleProject?.data?.duration_type);
		setValue("duration", singleProject?.data?.duration);
		setValue("manager", singleProject?.data?.manager);
		setValue("cost", singleProject?.data?.cost);
		setValue("expiry", singleProject?.data?.expiry);
		setValue("desc", singleProject?.data?.desc);
		setValue("department", singleProject?.data?.department);
	}, [singleProject?.data]);

	return (
		<>
			<ProjectForm
				control={control}
				buttonName='Update'
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

export default EditProject;
