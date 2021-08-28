import React from "react";
import Typist from "react-typist";
import Particles from "react-particles-js";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { GitHub, LinkedIn, Twitter, Instagram, Mail, Description } from "@material-ui/icons";
import { Container, Grid, Box } from "@material-ui/core";
import Link from 'next/link';
import { Helmet } from "react-helmet";

const particleParams = {
    particles: {
        number: {
            value: 120,
        },
        size: {
            value: 4,
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "attract",
            },
        },
    },
}

export default function Index() {
	return (
		<React.Fragment>
			<Helmet>
				<title>Jacob Starr</title>
			</Helmet>
			<Particles
				style={{ minHeight: "100vh", position: "absolute", zIndex:0}}
				params={particleParams}
                height="100vh" 
                width="100vw"
			/>
			<Container style={{ zIndex:1, position: "relative"}}>
				<Grid
                
					container
					spacing={0}
					direction="column"
					alignItems="center"
					// justifyContent="center"
				>
					<Grid item xs={6}>
                        <h1 className="name-header" style={{fontSize: "120px"}}>Jacob Starr</h1>
                        <Box p={3} m={5}>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jacobstarr60/">
                                <Tooltip title="Visit my LinkedIn">
                                    <IconButton color="secondary" aria-label="linked in profile link" component="span">
                                        <LinkedIn style={{ fontSize: 70 }}/>
                                    </IconButton>
                                </Tooltip>
                                
                            </a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/SubjectAlpha/">
                                <Tooltip title="Visit my GitHub">
                                    <IconButton color="secondary" aria-label="github profile link" component="span">
                                        <GitHub style={{ fontSize: 70 }}/>
                                    </IconButton>
                                </Tooltip>
                            </a>
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/jakestarr60/">
                                <Tooltip title="View my Twitter">
                                    <IconButton color="secondary" aria-label="twitter profile link" component="span">
                                        <Twitter style={{ fontSize: 70 }}/>
                                    </IconButton>
                                </Tooltip>
                            </a>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/jakestarr60/">
                                <Tooltip title="View my Instagram">
                                    <IconButton color="secondary" aria-label="twitter profile link" component="span">
                                        <Instagram style={{ fontSize: 70 }}/>
                                    </IconButton>
                                </Tooltip>
                            </a>
                            <a rel="noreferrer" target="_blank" href="mailto:contact@jacobstarr.me">
                                <Tooltip title="Send me an email">
                                    <IconButton color="secondary" aria-label="link to email me" component="span">
                                        <Mail style={{ fontSize: 70 }}/>
                                    </IconButton>
                                </Tooltip>
                                
                            </a>
                            <a rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1YPvDvD7ocY9cG3K2YU_BaCoIkivVGlltO0liyKGYdwQ/edit?usp=sharing">
                                <Tooltip title="View my resume">
                                    <IconButton color="secondary" aria-label="link to my resume" component="span">
                                        <Description style={{ fontSize: 70 }}/>
                                    </IconButton>
                                </Tooltip>
                            </a>
                        </Box>
                        <br/>
						<Typist style={{fontSize: "24px"}}>
                            <p>Hello my name is Jacob Starr, and I&apos;m a web developer based in Midland, Michigan, USA.</p>
						</Typist>
                        <br/>
                        <p>
                            I have a diverse set of languages under my belt ranging from HTML5/CSS3/Javascript to the C family, PHP, Java, Python, and more. I&apos;m also a trained system and network administrator for both Windows and Linux.
                        </p>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
