function solve(array)
{
    function IsNatural(number)
    {
        let comp = Math.round(number);

        return comp === number;
    }

    let x1 = array[0];
    let y1 = array[1];

    let x2 = array[2];
    let y2 = array[3];

    let dist_p1_0 = Math.sqrt(x1*x1 + y1*y1);
    let dist_p2_0 = Math.sqrt(x2*x2 + y2*y2);
    let dist_p1_p2 = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

    let valid1=IsNatural(dist_p1_0);
    let valid2=IsNatural(dist_p2_0);
    let valid3=IsNatural(dist_p1_p2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${valid1? 'valid' : 'invalid'}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${valid2? 'valid' : 'invalid'}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid3? 'valid' : 'invalid'}`)
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1])
