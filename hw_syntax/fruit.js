function solveFruit(fruit, weight, price)
{
    let weightKg = weight/1000;
    let sum = weightKg*price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solveFruit('apple', 1500, 2);