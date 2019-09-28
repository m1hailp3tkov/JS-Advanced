function solve(array)
{
    let obj = {};

    for(let i=0;i<array.length;i+=2)
    {
        let element = array[i];
        let value = +array[i+1];

        obj[element] = value;
    }

    console.log(obj);
}

let test0 = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52]

solve(test0);