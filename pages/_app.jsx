import React from "react";
import Link from "next/link";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "../styles/globals.css"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function MyApp({ Component, pageProps }) {
    const classes = useStyles();
	const items = [
		{ key: "index", name: "Home" },
		{ key: "oldIndex", name: "Old Index" },
	];
	return (
		<div className={classes.root}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"/> 
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>
			<Container>
				<Component {...pageProps} />
			</Container>
		</div>
	);
}

export default MyApp;
