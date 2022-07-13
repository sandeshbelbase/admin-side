import { List, Box, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import CountertopsIcon from "@mui/icons-material/Countertops";

import ContactPageIcon from "@mui/icons-material/ContactPage";

// const useStyles = makeStyles((theme) => ({
//     link: {
//         textDecoration: "none",
//         display: "block",
//         color: "gray",

//         "&.active": {
//             background: '#e5e5e5',
//             color: "white",
//             "& svg": {
//                 color: "#000 !important",
//             },
//         },
//     },
//     listItem: {
//         color: "gray",
//         padding: '8px 0 !important',

//         '& .MuiListItemButton-root': {
//             padding: '0px 15px !important'
//         },
//     },
// }));

const ListTab = () => {
	// const classes = useStyles();

	return (
		<List>
			<NavLink to='/' style={{ textDecoration: "none" }}>
				<ListItem button>
					<ListItemIcon sx={{ paddingLeft: "15px !important" }}>
						<CountertopsIcon sx={{ color: "black" }} />
					</ListItemIcon>
					<ListItemText primary='Projects' sx={{ color: "black" }} />
				</ListItem>
			</NavLink>
			<Divider />
			<NavLink to='/contractors' style={{ textDecoration: "none" }}>
				<ListItem button>
					<ListItemIcon sx={{ paddingLeft: "15px !important" }}>
						<ContactPageIcon sx={{ color: "black" }} />
					</ListItemIcon>
					<ListItemText primary='Contractors' sx={{ color: "black" }} />
				</ListItem>
			</NavLink>
		</List>
	);
};

export default ListTab;
