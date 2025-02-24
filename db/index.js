import { connect } from "mongoose";

const connectDB = async () => {
	try {
		const connectionResponce = await connect(
			`${process.env.MONGO_URL}`
		);
		console.log(
			`Connected to the DB`
		);
	} catch (error) {
		console.error("MongoDB connection failed: " + error);
		process.exit(1);
	}
};

export default connectDB;
