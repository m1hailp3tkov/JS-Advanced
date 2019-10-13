function solve() {

  const textarea = document.querySelector("#exercise > textarea:nth-child(2)");
  const textareaResult = document.querySelector("#exercise > textarea:nth-child(5)");
  const table = document.querySelector("#exercise > div > div > div > div > table > tbody");
  const generateBtn = document.querySelector("#exercise > button:nth-child(3)");
  const buyBtn = document.querySelector("#exercise > button:nth-child(6)");

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate()
  {
    for(let obj of JSON.parse(textarea.value))
    {
      console.log(obj);
      
      let tr = document.createElement('tr');
      //image
      let tdImage = document.createElement('td');
      let image = document.createElement('img');
      image.src = obj.img;
      tdImage.appendChild(image);
      tr.appendChild(tdImage);

      //name
      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = obj.name;
      tdName.appendChild(pName);
      tr.appendChild(tdName);

      //price
      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = obj.price;
      tdPrice.appendChild(pPrice);
      tr.appendChild(tdPrice);

      //decoration factor
      let tdDec = document.createElement('td');
      let pDec = document.createElement('p');
      pDec.textContent = obj.decFactor;
      tdDec.appendChild(pDec);
      tr.appendChild(tdDec);

      //mark
      let tdMark = document.createElement('td');
      let mark = document.createElement('input');
      mark.type = 'checkbox';
      tdMark.appendChild(mark);
      tr.appendChild(tdMark);


      table.appendChild(tr);
    }
  }

  function buy()
  {
    let total = 0;
    let items = [];
    let decoration = [];

    for(let row of table.children)
    {
      if(row.children[4].children[0].checked)
      {
          total += Number(row.children[2].children[0].textContent);
          items.push(row.children[1].children[0].textContent);
          decoration.push(Number(row.children[3].children[0].textContent));

      }
    }

    let avg = 0;
    for(let i=0;i<decoration.length;i++)
    {
        avg+=decoration[i];
    }

    textareaResult.textContent += `Bought furniture: ${items.join(', ')}\n`;
    textareaResult.textContent += `Total price: ${total.toFixed(2)}\n`;
    textareaResult.textContent += `Average decoration factor: ${avg}\n`;
  }
}
