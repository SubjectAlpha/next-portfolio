// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dotenv from "dotenv";

dotenv.config();

export default function handler(req, res) {
	res.status(200).json({ port: process.env.PORT });
}
