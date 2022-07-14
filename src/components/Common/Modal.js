import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function BasicModal({ setOpen, open, deleteId }) {
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	console.log("deleteId", deleteId);

	const confirmDelete = () => {
		axios
			?.delete(`http://localhost:3003/project/${deleteId}`)
			.then((response) => {
				console.log(response);
			});
		handleClose();
		window.location.reload();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Confirm !
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2, mb: 2 }}>
						Are you sure you want to delete this ?
					</Typography>
					<div className='crudBtns'>
						<button type='submit' className='no' onClick={handleClose}>
							cancle
						</button>
						<button type='submit' className='yes' onClick={confirmDelete}>
							Yes
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
