import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddProject from "../components/projects/AddProject";
import EditProject from "../components/projects/EditProject";
import HomeLayout from "../layouts/HomeLayout";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";

const RouteList = () => {
	return (
		<>
			<Routes>
				<Route path='' element={<HomeLayout />}>
					<Route path='/' element={<Projects />} />
					<Route path='contractors' element={<Projects />} />
					<Route path='add_project' element={<AddProject />} />
					<Route path='edit_project' element={<EditProject />}>
						<Route path=':id' element={<EditProject />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default RouteList;
