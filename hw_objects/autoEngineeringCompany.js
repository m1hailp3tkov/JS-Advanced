function solve(input)
{
    let brands = {};

    for(let car of input)
    {
        let [brand, model, produced] = car.split(' | ');

        if(!brands.hasOwnProperty(brand))
        {
            brands[brand]=[];
            brands[brand][model] = Number(produced);
        }
        else
        {
            if(brands[brand].hasOwnProperty(model))
            {
                brands[brand][model] += Number(produced);
            }
            else
            {
                brands[brand][model] = Number(produced);
            }
        }
    }

    //console.log(brands);

    for(let brand in brands)
    {
        console.log(brand);
        for(let model in brands[brand])
        {
            console.log(`###${model} -> ${brands[brand][model]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);