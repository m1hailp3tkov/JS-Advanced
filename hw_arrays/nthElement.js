function solve(array)
{
    let i = 0;
    let n = array[array.length-1];
    array = array.slice(0, array.length-1);

    array = array.filter(x => i++ % n === 0);

    console.log(array.join('\n'));
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']);