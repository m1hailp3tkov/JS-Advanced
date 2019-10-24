function solve() 
{
    const titleInput = document.querySelector("body > form > input[type=text]:nth-child(2)");
    const yearInput = document.querySelector("body > form > input[type=number]:nth-child(4)");
    const priceInput = document.querySelector("body > form > input[type=number]:nth-child(6)");

    const profitParagraph = document.querySelector("body > h1:nth-child(3)");

    let profit = 0;

    const [oldBooksDiv, newBooksDiv] = Array.from(document.getElementsByClassName('bookShelf'));

    const addButton = document.querySelector("body > form > button");
    addButton.addEventListener('click', e => {
        e.preventDefault();
        tryAddBook();
    });

    function tryAddBook()
    {
        let title = titleInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);

        if(title && year > 0 && price > 0)
        {
            let newBook = document.createElement('div');
            newBook.classList.add('book');

            let paragraph = document.createElement('p');
            paragraph.textContent = `${title} [${year}]`;

            let buyButton = document.createElement('button');
            buyButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            buyButton.addEventListener('click', e => buyBook(e.target.parentNode));

            let moveButton = document.createElement('button');
            moveButton.textContent = "Move to old section";
            moveButton.addEventListener('click', e => moveToOld(e.target.parentNode));

            newBook.appendChild(paragraph);
            newBook.appendChild(buyButton);
            newBook.appendChild(moveButton);

            newBooksDiv.appendChild(newBook);

            if(year<2000)
            {
                moveToOld(newBook);
            }
        }
    }
    
    function buyBook(book)
    {
        const buyBtn = book.childNodes[1];
        let price = getPriceFromButton(buyBtn);
        profit += price;

        profitParagraph.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`

        book.remove();
    }

    function moveToOld(book)
    {
        book.removeChild(book.childNodes[2]);

        const buyBtn = book.childNodes[1];
        let price = getPriceFromButton(buyBtn)*0.85;

        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        oldBooksDiv.appendChild(book);
    }

    function getPriceFromButton(btn)
    {
        return Number(btn.textContent.match(/Buy it only for (.*) BGN/)[1]);
    }
}