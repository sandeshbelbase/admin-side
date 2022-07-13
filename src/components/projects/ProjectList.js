import * as React from "react";
import { useState } from "react";
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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("ksbahsbhas", 159, 6.0, 24, 4.0),
	createData("sasasasas", 237, 9.0, 37, 4.3),
	createData("sasasasasa", 262, 16.0, 24, 6.0),
	createData("xzxxzxz", 305, 3.7, 67, 4.3),
	createData("lkmkomkl", 159, 6.0, 24, 4.0),
	createData("mnjklnjknjk", 237, 9.0, 37, 4.3),
	createData("l;k;kjljkbkl;", 262, 16.0, 24, 6.0),
	createData("lnbnlkn", 305, 3.7, 67, 4.3),
];

export default function ProjectList() {
	// Search inputs
	const [showData, setShowData] = useState([]);
	const [searchData, setSearchData] = useState([]);

	//pagination states
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);

	const handleSearch = (e) => {
		setSearchData(e.target.value);
		if (searchData !== null)
			setShowData(
				rows?.filter((item) => {
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
					<TableHead>
						<TableRow>
							<TableCell>Project Title</TableCell>
							<TableCell align='right'>Budger</TableCell>
							<TableCell align='right'>Phone</TableCell>
							<TableCell align='right'>Email</TableCell>
							<TableCell align='right'>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{searchData?.length
							? showData
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => (
										<TableRow
											key={row.name}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{row.name}
											</TableCell>
											<TableCell align='right'>{row.calories}</TableCell>
											<TableCell align='right'>{row.fat}</TableCell>
											<TableCell align='right'>{row.carbs}</TableCell>
											<TableCell align='right'>
												<EditIcon sx={{ marginRight: "25px" }} />
												<DeleteIcon />
											</TableCell>
										</TableRow>
									))
							: rows
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => (
										<TableRow
											key={row.name}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{row.name}
											</TableCell>
											<TableCell align='right'>{row.calories}</TableCell>
											<TableCell align='right'>{row.fat}</TableCell>
											<TableCell align='right'>{row.carbs}</TableCell>
											<TableCell align='right'>
												<EditIcon sx={{ marginRight: "25px" }} />
												<DeleteIcon />
											</TableCell>
										</TableRow>
									))}
						{/* {rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.calories}</TableCell>
								<TableCell align='right'>{row.fat}</TableCell>
								<TableCell align='right'>{row.carbs}</TableCell>
								<TableCell align='right'>
									<EditIcon sx={{ marginRight: "25px" }} />
									<DeleteIcon />
								</TableCell>
							</TableRow>
						))} */}
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
					count={rows.length}
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
		</>
	);
}
