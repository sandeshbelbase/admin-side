import * as React from "react";
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

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function ContractorList() {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Contractor Name</TableCell>
							<TableCell align='right'>Address</TableCell>
							<TableCell align='right'>Phone</TableCell>
							<TableCell align='right'>Email</TableCell>
							<TableCell align='right'>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
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
					</TableBody>
				</Table>
			</TableContainer>
			<div
				className=''
				style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
			>
				<Button
					variant='outlined'
					style={{
						marginTop: "20px",
						"&:hover": {
							background: "red !important",
						},
					}}
				>
					<AddIcon />{" "}
					<span style={{ textDecoration: "none" }}>Add Contractor</span>
				</Button>
			</div>
		</>
	);
}
