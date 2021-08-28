import React from "react";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";
import { Container, Menu } from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
	const items = [
		{ key: "index", name: "Home" },
		{ key: "oldIndex", name: "Old Index" },
	];
	return (
		<div>
			<Container>
				<Menu>
					<Menu.Item>
						<Link href="/">Index</Link>
					</Menu.Item>
				</Menu>
				<Component {...pageProps} />
			</Container>
		</div>
	);
}

export default MyApp;
