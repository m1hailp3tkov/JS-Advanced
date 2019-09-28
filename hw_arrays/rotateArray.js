function solve(array)
{
    let n = array[array.length-1];
    array = array.slice(0, array.length-1);
    
    let length = array.length;
    let rotations = n%(length);


    for(let i = 0; i < rotations; i++)
    {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

solve(['1', 
'2', 
'3', 
'4',
'5', 
'5']);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']);