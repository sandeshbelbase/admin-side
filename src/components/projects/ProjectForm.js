import React from "react";
import CustomInput from "../Common/form/CustomInput/CustomInput";
import CustomSelect from "../Common/form/CustomSelect/CustomSelect";
import CustomTextarea from "../Common/form/CustomTextarea/CustomTextarea";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const ProjectForm = ({
	errors,
	handleSubmit,
	control,
	submit,
	defaultValues,
}) => {
	const options = [
		{ label: "Month", value: "month" },
		{ label: "Year", value: "year" },
	];
	const department = [
		{ label: "Web App Development", value: "web" },
		{ label: "Mobile App Developent", value: "mobile" },
		{ label: "Digital Marketing", value: "digital" },
	];

	return (
		<>
			<div className='project-form'>
				<form onSubmit={handleSubmit(submit)}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<div className='field'>
								<span>Poject name:</span>
								<div className='show'>
									<CustomInput
										control={control}
										name='name'
										placeholder='project sulekha...'
									/>
									<p className='yupError'>{errors.name?.message}</p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Duration Type</span>
								<div className='show'>
									<CustomSelect
										control={control}
										name='duration_type'
										options={options}
									/>
									<p className='yupError'>{errors.duration_type?.message}</p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Duration:</span>
								<div className='show'>
									<CustomInput
										name='duration'
										control={control}
										placeholder='time duration..'
									/>
									<p className='yupError'>{errors.duration?.message}</p>
								</div>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div className='field'>
								<span>Cost Evaluation:</span>
								<div className='show'>
									<CustomInput
										name='cost'
										type='number'
										control={control}
										placeholder='Rs'
									/>
									<p className='yupError'>{errors.cost?.message}</p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Department</span>
								<div className='show'>
									<CustomSelect
										name='department'
										control={control}
										options={department}
									/>
								</div>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div className='field'>
								<span>Project Manager:</span>
								<div className='show'>
									<CustomInput
										name='manager'
										control={control}
										placeholder='Harry Poter..'
									/>
									<p className='yupError'>{errors.manager?.message}</p>
								</div>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div className='field'>
								<span>Start date:</span>
								<div className='show'>
									<CustomInput name='expiry' type='date' control={control} />
									<p className='yupError'>{errors.expiry?.message}</p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className='field'>
								<span>Project Brefing:</span>
								<div className='show'>
									<CustomTextarea
										name='desc'
										cols='40'
										rows='5'
										type='date'
										control={control}
										placeholder='description'
									/>
									<p className='yupError'>{errors.desc?.message}</p>
								</div>
							</div>
						</Grid>
					</Grid>

					<div className='btn'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ProjectForm;
