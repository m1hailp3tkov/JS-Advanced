function getBMI(name, age, weight, height)
{
    let bmi = Math.round(weight/((height/100)**2));

    let status = '';

    if(bmi<18.5)    status = 'underweight';
    else if(bmi<25) status = 'normal';
    else if(bmi<30) status = 'overweight';
    else            status = 'obese';

    let result = {name, personalInfo: {age, weight, height}, BMI: bmi, status};

    if(status == 'obese')
    {
        result.recommendation = 'admission required';
    }
    //console.log(result);
    return result;
}

getBMI('Peter', 29, 75, 182);
getBMI('Honey Boo Boo', 9, 57, 137);