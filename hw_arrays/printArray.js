function solve(array)
{
    let delim = array[array.length-1];

    let elements = array.length >= 1 ? array.slice(0, array.length-1) : [];

    console.log(elements.join(delim));
}


solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']);