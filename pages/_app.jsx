import React from "react";
import { orange } from "@material-ui/core/colors";
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";
import Head from "next/head";
import "../styles/globals.css";

const newTheme = createTheme({
	palette: {
		secondary: {
			main: orange[400],
		},
	},
	overrides: {
		MuiIconButton: {
			root: {
				"&:hover": {
					color: orange[600],
				},
			},
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

function MyApp({ Component, pageProps }) {
	const classes = useStyles();
	const items = [
		{ key: "index", name: "Home" },
		{ key: "oldIndex", name: "Old Index" },
	];
	return (
		<React.Fragment>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Head>
			<div className={classes.root} style={{ minHeight: "105vh" }}>
				<ThemeProvider theme={newTheme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</div>

			<footer></footer>
		</React.Fragment>
	);
}

export default MyApp;
