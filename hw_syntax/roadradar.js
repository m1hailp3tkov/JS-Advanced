function solve(array)
{
    let speed = array[0];
    let area = array[1];

    switch(area)
    {
        case 'motorway':
            var diff = speed-130;
            break;

        case 'interstate':
            var diff = speed-90;
            break;

        case 'city':
            var diff = speed-50;
            break;

        case 'residential':
            var diff = speed-20;
            break;
    }

    if(diff>40)
    {
        console.log('reckless driving');
    }
    else if(diff>20)
    {
        console.log('excessive speeding');
    }
    else if(diff>0)
    {
        console.log('speeding');
    }
}