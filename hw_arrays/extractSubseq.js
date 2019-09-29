function solve(array)
{
    let result = [];
    let n = array[0];
    result.push(n);

    for(let i=1;i<array.length;i++)
    {
        if(n<=array[i])
        {
            n=array[i];
            result.push(n);
        }
    }

    console.log(result.join('\n'));
}