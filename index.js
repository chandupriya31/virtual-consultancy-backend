import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running`);
		});
	})
	.catch((err) => {
		console.log(`Unable to connect mongoDB server.... ${err}`);
	});

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
