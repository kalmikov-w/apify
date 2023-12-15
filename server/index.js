import express, { json } from "express";
import productsData from "./sampleProducts.json" assert { type: "json" };
import productsRouter from "./routes/productsRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/products', productsRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
