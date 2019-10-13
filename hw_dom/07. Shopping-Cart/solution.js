function solve() 
{
   let addButtons = [...document.querySelectorAll('.add-product')];
   addButtons.map(x => x.addEventListener('click', e => addProduct(e)));

   let checkoutButton = document.querySelector("body > div > button");
   checkoutButton.addEventListener('click', checkout);

   let textArea = document.querySelector("body > div > textarea");
   
   let uniqueProducts = [];
   let totalPrice = 0;

   function addProduct(e)
   {
      let productDiv = e.target.parentNode.parentNode;

      let productName = productDiv.getElementsByClassName('product-title')[0].textContent;
      let productCost = productDiv.getElementsByClassName('product-line-price')[0].textContent;

      if(!uniqueProducts.includes(productName)) 
      {
         uniqueProducts.push(productName);
      }

      textArea.textContent += `Added ${productName} for ${productCost} to the cart.\n`;
      totalPrice += Number(productCost);
   }

   function checkout()
   {
      let list = uniqueProducts.join(', '); 

      textArea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

      addButtons.map(x => x.disabled = true);
      checkoutButton.disabled = true;
   }
}