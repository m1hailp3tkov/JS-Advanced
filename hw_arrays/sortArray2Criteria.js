function solve(array)
{
    function customSort(a,b)
    {
        let result = a.length - b.length;
        if(result == 0)
        {
            result = a.localeCompare(b);
        }

        return result;
    }

    let result = array.sort((a,b) => customSort(a,b));
    console.log(result.join('\n'));
}

solve(['alpha', 
'beta', 
'gamma']);