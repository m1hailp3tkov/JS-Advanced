function solve(...input)
{
    let result = '';

    let array = Object.entries(
        input.reduce((previous, current) => {
            let typeOfArg = typeof current;
            
            if(!previous.hasOwnProperty(typeOfArg))
            {
                previous[typeOfArg] = 0;
            }
            
            previous[typeOfArg]++;
            
            console.log(`${typeOfArg}: ${current}`);
            
            return previous;
    }, {}));

    let res = array.sort((a,b) => b[1] - a[1]);

    for(let x of res)
    {
        console.log(`${x[0]} = ${x[1]}`);
    }
}


solve('cat', 42, function () { console.log('Hello world!'); },42);