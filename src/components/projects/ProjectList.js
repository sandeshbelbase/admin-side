import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import TablePagination from "@mui/material/TablePagination";

import { Link } from "react-router-dom";
import BasicModal from "../Common/Modal";
import axios from "axios";

export default function ProjectList() {
	// Search inputs
	const [showData, setShowData] = useState([]);
	const [searchData, setSearchData] = useState([]);

	//pagination states
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);

	//for modals
	const [open, setOpen] = useState(false);

	//store projects
	const [projects, setProjects] = useState([]);

	//delete with modal
	const [deleteId, setDeleteId] = useState("");

	const handleSearch = (e) => {
		setSearchData(e.target.value);
		if (searchData !== null)
			setShowData(
				projects?.data?.filter((item) => {
					return item?.name.toLowerCase()?.includes(searchData?.toLowerCase());
				})
			);
	};

	const handleChangePage = (event, newPage) => {
		console.log(newPage);
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleDelete = (id) => {
		setOpen(true);
		setDeleteId(id);
	};
	useEffect(() => {
		axios.get("http://localhost:3003/project").then((response) => {
			setProjects(response);
		});
	}, []);

	return (
		<>
			<div className='search'>
				<TextField
					id='standard-basic'
					label='Search'
					variant='standard'
					onChange={(e) => handleSearch(e)}
				/>
			</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead sx={{ textAlign: "center" }}>
						<TableRow sx={{ textAlign: "center" }}>
							<TableCell>Project Title</TableCell>
							<TableCell align='right'>Duration</TableCell>
							<TableCell align='right'>Duration Type</TableCell>
							<TableCell align='right'>Project manager</TableCell>
							<TableCell align='right'>Department</TableCell>
							<TableCell align='right'>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{searchData?.length
							? showData
									?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									?.map((row) => (
										<TableRow
											key={row?.name}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
												textAlign: "center",
											}}
										>
											<TableCell component='th' scope='row'>
												{row?.name}
											</TableCell>
											<TableCell align='right'>{row?.duration}</TableCell>
											<TableCell align='right'>{row?.duration_type}</TableCell>
											<TableCell align='right'>{row?.manager}</TableCell>
											<TableCell align='right'>{row?.department}</TableCell>
										</TableRow>
									))
							: projects?.data
									?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									?.map((row) => (
										<TableRow
											key={row?.name}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{row?.name}
											</TableCell>
											<TableCell align='right'>{row?.duration}</TableCell>
											<TableCell align='right'>{row?.duration_type}</TableCell>
											<TableCell align='right'>{row?.manager}</TableCell>
											<TableCell align='right'>{row?.department}</TableCell>

											<TableCell align='right'>
												<Link to={`/edit_project/${row?.id}`}>
													<EditIcon sx={{ marginRight: "25px" }} />
												</Link>
												<DeleteIcon onClick={() => handleDelete(row?.id)} />
											</TableCell>
										</TableRow>
									))}
					</TableBody>
				</Table>
			</TableContainer>
			<div
				className=''
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<TablePagination
					component='div'
					count={projects?.data?.length}
					page={page}
					onPageChange={handleChangePage}
					rowsPerPage={rowsPerPage}
					onRowsPerPageChange={handleChangeRowsPerPage}
					style={{ marginTop: "20px" }}
				/>

				<Link to='/add_project' style={{ textDecoration: "none" }}>
					<Button
						variant='outlined'
						style={{
							marginTop: "20px",
							"&:hover": {
								background: "red !important",
							},
						}}
					>
						<AddIcon /> <span style={{}}>Add Contractor</span>
					</Button>
				</Link>
			</div>
			<BasicModal setOpen={setOpen} open={open} deleteId={deleteId} />
		</>
	);
}
