import express from "express";
import axios from "axios";

const productsRouter = express.Router();

productsRouter.route("/").get(async (req, res) => {
  try {
    // Make the initial request to get total number of products
    const apiUrl = "https://api.ecommerce.com/products";

    const products = [];
    for (let i = 1; i <= 1; i++) {
      const minCalculatePrice = (i - 1) * 1000 + 1;
      const maxCalculatePrice = i * 1000;

      const currentPageUrl = `${apiUrl}?minPrice=${minCalculatePrice}&maxPrice=${maxCalculatePrice}`;
      const currentPageResponse = await axios.get(currentPageUrl);

      if (
        currentPageResponse.data.products &&
        currentPageResponse.data.products.length > 0
      ) {
        const currentPageProducts = currentPageResponse.data.products;
        products.push(...currentPageProducts);
      } else {
        console.log(
          `No products in the range: ${minCalculatePrice} - ${maxCalculatePrice}`
        );
      }
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default productsRouter;
