function solve(input)
{
    function getDistinctArrays(arr)
    {
        let distinctArrays = [];

        for(let i=0; i<arr.length; i++)
        {
            let unique = true;

            for(let j=i+1; j<arr.length; j++)
            {
                if(arraysEqual(arr[i], arr[j]))
                {
                    unique = false;
                }
            }

            if(unique)
            {
                distinctArrays.push(arr[i]);
            }
        }

        return distinctArrays;
    }

    function arraysEqual(a, b) 
    {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
      
        a = a.sort((x, y) => x-y);
        b = b.sort((x, y) => x-y);
      
        for (var i = 0; i < a.length; ++i) 
        {
          if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function sortArraysByLength(a,b)
    {
        return a.length - b.length;
    }

    function sortDescending(a,b)
    {
        return b-a;
    }

    let arrays = [];
    input.forEach(element => {
        arrays.push(JSON.parse(element));
    });

    let distinctArrays = getDistinctArrays(arrays);
    let sortedArrays = distinctArrays.sort((a,b) => sortArraysByLength(a,b));
    
    sortedArrays.forEach(element => {
        element = element.sort((a,b) => sortDescending(a,b));
    });

    sortedArrays.forEach(x => {
        console.log(`[${x.join(', ')}]`);
    });
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);

solve(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);