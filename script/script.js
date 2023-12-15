import axios from "axios";
//"type": "module" in package.json

const apiUrl = "https://api.ecommerce.com/products";

async function getProducts() {
  let products = [];

  for (let i = 0; i <= initialResponse.count; i++) {

    let minCalculatePrice = (i - 1) * 1 + 1000;
    let maxCalculatePrice = i * 1000;
    const currentPageUrl = `${apiUrl}?minPrice=${minCalculatePrice}&maxPrice=${maxCalculatePrice}`;
    const currentPageResponse = await axios.get(currentPageUrl);
    if (
      currentPageResponse.products &&
      currentPageResponse.products.length > 0
    ) {
      const currentPageProducts = currentPageResponse.products;

      products = products.concat(currentPageProducts);
    } else {
      console.log(
        `No products in the this range: ${minCalculatePrice} - ${maxCalculatePrice}`
      );
    }
  }
  return products;
}

getProducts()
  .then((products) => {
    console.log(products);
  })
  .catch((error) => console.log(error));
