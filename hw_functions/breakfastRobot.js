func = () =>
{
    const microelements = 
    {
        carbohydrate:0,
        flavour:0,
        fat:0,
        protein:0
    };

    const recipes = 
    {
        'apple': {carbohydrate: 1, flavour: 2},
        'lemonade': {carbohydrate: 10, flavour: 20},
        'burger': {carbohydrate: 5, fat: 7, flavour: 3},
        'eggs': {protein: 5, fat: 1, flavour: 1,},
        'turkey': {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };


    let commands = 
    {
        restock: (x,y) => 
        {
            microelements[x] += y;
            return 'Success'
        },

        prepare: (x,y) =>
        {
            let success = true;
            let recipe = Object.entries(recipes[x]);

            for(let element of recipe)
            {
                if(microelements[element[0]] < element[1] * y)
                {
                    success = false;
                    result = `Error: not enough ${element[0]} in stock`;
                    break;
                }
            }

            if(success)
            {
                recipe.forEach(e => ingredients[e] -= e[1]*y);
            }
            return result;
        },

        report: () => Object.entries(ingredients)
        .map(e => `${e[0]}=${e[1]}`)
        .join(' ')
    }

    return x => 
    {
        const [command, element, quantity] = x.split(' ');
        return commands[command](element, quantity);
    }
};
