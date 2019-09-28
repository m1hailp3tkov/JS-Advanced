function solveSameNumbers(number)
{
    let sum=0;
    let lastnum = number%10;
    let result = true;
    
    while(number!=0)
    {
        let currentnum = number%10;

        sum+=currentnum;

        if(currentnum !== lastnum) 
        {
            result=false;
        }

        number /= 10;
        number = Math.floor(number);
    }

    console.log(result);
    console.log(sum);
}

solveSameNumbers(333333)