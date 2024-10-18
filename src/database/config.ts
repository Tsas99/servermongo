import { connect } from "mongoose";
import { config } from "dotenv";

config();

const URL: string =
  "mongodb+srv://tsagaanaa0210:eFSFTMD1K2SxKtdr@cluster0.d1ov1.mongodb.net/E-commerce";
//   "mongodb+srv://tsagaanaa0210:eFSFTMD1K2SxKtdr@cluster0.d1ov1.mongodb.net/";

export const connectDatabase = async () => {
  try {
    await connect(URL);
  } catch (err) {
    console.log("Database holbohod aldaa garlaa");
  }
};
