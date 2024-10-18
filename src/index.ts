import express from "express";
import cors from "cors";
import { connectDatabase } from "./database/config";
import { UserModel } from "./database/models/users.model";

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.Port;

connectDatabase();

app.get("/", async (req, res) => {
  res.status(200).send({ message: "Hello" });
});

// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const foundUser = await UserModel.findById({
//     _id: "670c9565e70a422e4ccb0bbf",
//   });

//   res.send(foundUser);
// });

// try {
// await UserModel.create({
//     firstName: "Tsas",
//     lastName: "asdas",
//     email: "asoidjoasijd",
//   });
//   res.send ("new user created")

// }catch (err) {
//     console.error("email dawxardsan", err);
//     res.status(500).send("Email davxardlaa")
// }

// app.delete("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   await UserModel.findByIdAndDelete({
//     _id: id,
//   });
//   res.send("unavailable user");
// });
app.listen(8000, () => {
  console.log("http://localhost:8000");
});
