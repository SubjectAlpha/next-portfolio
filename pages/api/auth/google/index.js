import dotenv from "dotenv";
import {
	ClientCredentials,
	ResourceOwnerPassword,
	AuthorizationCode,
} from "simple-oauth2";

dotenv.config();

const config = {
	client: {
		id: process.env.GOOGLE_ID ?? "",
		secret: process.env.GOOGLE_SECRET ?? "",
	},
	auth: {
		tokenHost: "https://accounts.google.com/o/oauth2/v2/auth",
	},
};

export default async function handler(req, res) {
	res.redirect("/");
	const client = new AuthorizationCode(config);

	const authorizationUri = client.authorizeURL({
		redirect_uri: "http://localhost:3000/api/auth/callback",
		scope: "https://www.googleapis.com/auth/calendar.events.readonly",
	});

	res.redirect(authorizationUri);

	const tokenParams = {
		code: "<code>",
		redirect_uri: "http://localhost:3000/api/auth/callback",
		scope: "<scope>",
	};

	try {
		const accessToken = await client.getToken(tokenParams);
		console.log(accessToken);
	} catch (error) {
		console.log("Access Token Error", error.message);
	}
}
