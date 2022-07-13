import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const HomeLayout = () => {
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<NavBar />
				<SideBar />
				<Box
					component='main'
					sx={{ flexGrow: 1, p: 3, background: "#f8f8f8", padding: "0px 30px" }}
				>
					<Toolbar />
					<Outlet />
				</Box>
			</Box>
		</>
	);
};

export default HomeLayout;
