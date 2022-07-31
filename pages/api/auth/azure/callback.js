import { ConfidentialClientApplication } from "@azure/msal-node";
import dotenv from "dotenv";
import { msalConfig } from ".";

dotenv.config();

const msalInstance = new ConfidentialClientApplication(msalConfig);

export default async function handler(req, res) {
	if (req.body.state) {
		try {
			const tokenResponse = await msalInstance.acquireTokenByCode({
				redirectUri: process.env.AZURE_REDIRECT_URI,
				code: req.body.code,
				scopes: ["User.Read", "Calendars.Read"],
			});

			res.json({
				token: tokenResponse.accessToken,
			});
		} catch (error) {
			console.error(error);
			res.status(500);
		}
	} else {
		console.error("No State");
		res.status(400);
	}
}
