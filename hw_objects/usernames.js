function solve(input)
{
    let noDuplicates = [...new Set(input)];

    

    function sortByLengthThenAlphabetically(a,b)
    {
        if(a.length == b.length)
        {
            return a.localeCompare(b);
        }
        else
        {
            return a.length - b.length;
        }
    }

    let sortedUsernames = noDuplicates.sort((a,b) => sortByLengthThenAlphabetically(a,b));

    for(let userName of sortedUsernames)
    {
        console.log(userName);
    }
}

solve(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']);