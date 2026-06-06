export const homeQuantityToggle = (event , id , stock) => {
    const currentValue = document.querySelector(`#card${id}`);
    console.log(currentValue);

    const productQuantity = currentValue.querySelector(".value");
    console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 0;

    if (event.target.className === "add") {
        if(quantity < stock){
            quantity++;
        }
        else if( quantity === stock){
            quantity = stock;
        }
    }

    if (event.target.className === "subtract") {
        if(quantity > 1){
            quantity--;
        }
    }
    
    productQuantity.innerText = quantity;
    console.log(quantity);
    
    productQuantity.setAttribute("data-quantity" , quantity);
    return quantity;
};