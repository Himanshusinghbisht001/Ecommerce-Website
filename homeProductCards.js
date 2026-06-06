import { homeQuantityToggle } from "./homeQuantityToggle";

const productTemplate = document.querySelector(".productTemplate");
const productContainer = document.querySelector(".productContainer");

export const showProductConainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((product) => {
    const { id, name, category, brand, price, stock, image, description } =
      product;

    // ? Colne all the data from the templeate...
    const productClone = productTemplate.content.cloneNode(true);

    // ? It apply all unique vale of id in all products :- 
    productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`)

    // ? All the Data from the Templeate    
    productClone.querySelector(".productCategory").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productDecribion").textContent = description;
    productClone.querySelector(".orignalPrice").textContent = `₹ ${price}`;
    productClone.querySelector(".selaingPrice").textContent = `₹ ${price * 2}`;
    productClone.querySelector(".availableStock").textContent = stock;
    productClone.querySelector(".availableStock").textContent = stock;

    productClone.querySelector(".priceButton").addEventListener("click" , (event) => {
        homeQuantityToggle(event , id , stock);
    });

    productContainer.append(productClone);
  });
};

