import express, { Request, Response } from "express";
import productRoutes from "./routes/productRoutes";

const app = express();
const port = 3000;

app.use("/api", productRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
