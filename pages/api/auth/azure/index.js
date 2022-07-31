import dotenv from "dotenv";
import {
	ConfidentialClientApplication,
	CryptoProvider,
} from "@azure/msal-node";

dotenv.config();

export const REDIRECT_URI = process.env.AZURE_REDIRECT_URI;
export const msalConfig = {
	auth: {
		clientId: process.env.AZURE_CLIENT_ID,
		authority: "https://login.microsoftonline.com/common",
		clientSecret: process.env.AZURE_CLIENT_SECRET,
	},
	system: {
		loggerOptions: {
			loggerCallback(loglevel, message, containsPii) {
				console.log(message);
			},
			piiLoggingEnabled: false,
			logLevel: "Info",
		},
	},
};

const msalInstance = new ConfidentialClientApplication(msalConfig);
const cryptoProvider = new CryptoProvider();

export async function redirectToAuthCode(
	req,
	res,
	authCodeUrlRequestParams,
	authCodeRequestParams
) {
	try {
		const authCodeUrlResponse = await msalInstance.getAuthCodeUrl({
			redirectUri: REDIRECT_URI,
			responseMode: "form_post", // recommended for confidential clients
			...authCodeUrlRequestParams,
		});
		res.redirect(authCodeUrlResponse);
	} catch (error) {
		console.error(error);
		res.status(500);
	}
}

export default async function handler(req, res) {
	// encode the state param
	const state = cryptoProvider.base64Encode(
		JSON.stringify({
			csrfToken: cryptoProvider.createNewGuid(),
			redirectTo: "/users/profile",
		})
	);

	const authCodeUrlRequestParams = {
		state: state,
		scopes: ["User.Read", "Calendars.Read"],
	};

	const authCodeRequestParams = {
		scopes: ["User.Read", "Calendars.Read"],
	};

	// trigger the first leg of auth code flow
	return redirectToAuthCode(
		req,
		res,
		authCodeUrlRequestParams,
		authCodeRequestParams
	);
}
