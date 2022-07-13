import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Common/form/CustomInput/CustomInput";
import CustomSelect from "../Common/form/CustomSelect/CustomSelect";
import CustomTextarea from "../Common/form/CustomTextarea/CustomTextarea";
import { Grid } from "@mui/material";
const AddProject = () => {
	const defaultValues = {
		name: "",
		duration_type: "month",
		duration: "",
		manager: "",
		cost: "",
		expiry: "",
		desc: "",
	};

	const options = [
		{ label: "Month", value: "month" },
		{ label: "Year", value: "year" },
	];
	const department = [
		{ label: "Web App Development", value: "web" },
		{ label: "Mobile App Developent", value: "mobile" },
		{ label: "Digital Marketing", value: "digital" },
	];
	const { handleSubmit, control } = useForm({ defaultValues });

	const submit = (values) => {
		console.log("values", values);
	};
	return (
		<>
			<div className='project-form'>
				<form onSubmit={handleSubmit(submit)}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<div className='field'>
								<span>Poject name:</span>
								<CustomInput
									control={control}
									name='name'
									placeholder='project sulekha...'
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Duration Type</span>
								<CustomSelect
									control={control}
									name='duration_type'
									options={options}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Duration:</span>
								<CustomInput
									name='duration'
									control={control}
									placeholder='time duration..'
								/>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div className='field'>
								<span>Cost Evaluation:</span>
								<CustomInput
									name='cost'
									type='number'
									control={control}
									placeholder='Rs'
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Department</span>
								<CustomSelect
									name='manager'
									control={control}
									options={department}
								/>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div className='field'>
								<span>Project Manager:</span>
								<CustomInput
									name='manager'
									control={control}
									placeholder='Harry Poter..'
								/>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div className='field'>
								<span>Start date:</span>
								<CustomInput name='expiry' type='date' control={control} />
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Project Brefing:</span>
								<CustomTextarea
									name='desc'
									cols='40'
									rows='5'
									type='date'
									control={control}
									placeholder='description'
								/>
							</div>
						</Grid>
					</Grid>

					{/* <div className='field'>
						<div className='twoField'>
							<div className='subfield'>
								Duration Type
								<CustomSelect
									control={control}
									name='duration_type'
									options={options}
								/>
							</div>
							<div className='subfield'>
								Duration:
								<CustomInput name='duration' control={control} />
							</div>
						</div>
					</div> */}

					<div className='btn'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddProject;
