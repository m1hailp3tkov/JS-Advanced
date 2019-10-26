function solve() {
   const addBtn = document.querySelector("#add-new > button");
   addBtn.addEventListener('click', e => {e.preventDefault(); addProduct()});

   const nameField = document.querySelector("#add-new > input[type=text]:nth-child(2)");
   const quantityField = document.querySelector("#add-new > input[type=text]:nth-child(3)");
   const priceField = document.querySelector("#add-new > input[type=text]:nth-child(4)");

   const productsList = document.querySelector("#products > ul");

   const filterField = document.querySelector("#filter");
   const filterButton = document.querySelector("#products > div > button");
   filterButton.addEventListener('click', filterProducts);

   const myProductsList = document.getElementById('myProducts').children[1];
   
   const totalPriceHeader = document.querySelector("body > h1:nth-child(4)");
   let total = 0;

   const buyButton = document.querySelector("#myProducts > button");
   buyButton.addEventListener('click', buy);

   function buy()
   {
      while (myProductsList.firstChild) 
      {
         myProductsList.removeChild(myProductsList.firstChild);
      }

      totalPriceHeader.textContent = "Total Price: 0.00";
      total = 0;
   }

   function addProductToCart(e)
   {
      let divElements = e.target.parentNode.parentNode;

      let availableStr = divElements.children[1].textContent;
      let available = Number(availableStr.match(/Available: (.*)/)[1]);
      available--;

      divElements.children[1].textContent = `Available: ${available}`;

      let name = divElements.children[0].textContent;
      let price = Number(divElements.children[2].children[0].textContent);


      let li = document.createElement('li');
      li.textContent = name;
      let strong = document.createElement('strong');
      strong.textContent = price.toFixed(2);

      li.appendChild(strong);
      myProductsList.appendChild(li);

      total += price;
      totalPriceHeader.textContent = `Total Price: ${total.toFixed(2)}`;

      if(available === 0)
      {
         e.target.parentNode.parentNode.remove();
      }
   }

   function addProduct()
   {
      let item = document.createElement('li');

         let span = document.createElement('span');
         span.textContent = nameField.value;
         let strong = document.createElement('strong');
         strong.textContent = `Available: ${quantityField.value}`;

         let div = document.createElement('div');
            let divStrong = document.createElement('strong');
            divStrong.textContent = Number(priceField.value).toFixed(2);
            let button = document.createElement('button');
            button.textContent = "Add to Client's List";
            button.addEventListener('click', e => addProductToCart(e));

         div.appendChild(divStrong);
         div.appendChild(button);

      item.appendChild(span);
      item.appendChild(strong);
      item.appendChild(div);

      productsList.appendChild(item);
   }

   //@ts-check
   function filterProducts()
   {
      let nameFilter = filterField.value.toLowerCase();

      let liNodes = Array.from(productsList.children);

      for(let li of liNodes)
      {
         let productName = li.childNodes[0].textContent.toLowerCase();

         if(!productName.includes(nameFilter))
         {
            li.style.display = 'none';
         }
         else
         {
            li.style.display = '';
         }
      }
   }
}