import mongoose from "mongoose";

const MONGO_URI: string | undefined = process.env.MONGO_URI!;

export const connectToDatabase = async () => {
  if (!MONGO_URI)
    throw new Error(`Configure MONGO URI properly in the .env file.`);

  try {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
      console.log(`Already connected to MongoDB Database.`);
      return;
    }
    if (connectionState === 2) {
      console.log(`Connecting to MongoDB Database...`);
      return;
    }

    await mongoose.connect(MONGO_URI, {
      dbName: "auth-application-2",
      bufferCommands: true,
    });
    console.log(`Connected to MongoDB Database Successfully!!!`);
    return;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error Occured.";
    console.error(`Error connecting to MongoDB Database: ${errorMessage}`);
    process.exit(1);
  }
};
