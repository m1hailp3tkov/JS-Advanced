function solve() 
{
    let addButton = document.querySelector("#exercise > article > button");
    addButton.addEventListener('click', addName);

    function addName()
    {
        let input = document.querySelector("#exercise > article > input[type=text]").value;
        let firstLetter = input.toUpperCase()[0];

        let formattedName = `${firstLetter}${input.substring(1).toLowerCase()}`;

        let list = document.querySelector("#exercise > div > ol").children;

        let listItemIndex = firstLetter.charCodeAt(0) - 'A'.charCodeAt([0]);
        
        list[listItemIndex].innerHTML !== '' ? list[listItemIndex].innerHTML+= `, ${formattedName}` : list[listItemIndex].innerHTML = formattedName;
    }
}