import express from "express";
import cors from "cors";
import posts from "./ReadFile.mjs";

//23.04.2024
const PORT = 9111;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /rasacutmachine routes
app.use("/machineData", posts);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("An unexpected error occured.");
});
// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
