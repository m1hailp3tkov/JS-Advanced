function solve(array)
{
    let number = array[0];

    for(let i=1;i<6;i++)
    {
        switch(array[i])
        {
            case 'chop':
                number/=2;
                break;
            
            case 'dice':
                number = Math.sqrt(number);
                break;

            case 'spice':
                number++;
                break;

            case 'bake':
                number *=3;
                break;

            case 'fillet':
                number *=0.8;
        }

        console.log(number);
    }
}