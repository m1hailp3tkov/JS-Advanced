function solve(input)
{
    const alphabeticalSort = (a,b) => a.localeCompare(b);
    let catalogue = {};

    for(let line of input)
    {
        let [name, price] = line.split(' : ');
        price = Number(price);

        let initial = name[0];
        if(!catalogue.hasOwnProperty(initial))
        {
            catalogue[initial] = {};
        }

        let products = catalogue[initial];

        if(!products.hasOwnProperty(name))
        {
            products[name] = price;
        }
    }

    let sortedInitials = Object.keys(catalogue).sort(alphabeticalSort);

    for(let initial of sortedInitials)
    {
        console.log(initial);
        let products = catalogue[initial];
        let sortedProducts = Object.keys(products).sort(alphabeticalSort);

        sortedProducts.forEach(x => {
            console.log(`  ${x}: ${products[x]}`)
        })
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);