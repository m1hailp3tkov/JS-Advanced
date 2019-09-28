function solveGCD(a,b)
{
    let r = a;
    while(r!=0)
    {
        a=b;
        b=r;
        r=a%b;
    }
    console.log(b);
}

solveGCD(120,90);