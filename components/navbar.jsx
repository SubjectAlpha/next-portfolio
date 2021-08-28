import { Grid } from "@material-ui/core";
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";

export default function Navbar(props){
    return(
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <h1 className="name-header">Jacob Starr</h1>
                </Grid>
                <Grid item xs={2}>
                    <a rel="noreferrer" target="_blank" href="http://www.google.com/">
                        <IconButton color="secondary" aria-label="linked in profile link" component="span">
                            <LinkedInIcon style={{ fontSize: 40 }}/>
                        </IconButton>
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
