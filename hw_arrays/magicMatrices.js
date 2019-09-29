function solve(matrice)
{
    let magic = true;
    let expectedSum = matrice[0].reduce((accumulator, currentValue) => accumulator+currentValue);

    for(let i=1;i<matrice.length;i++)
    {
        let actualSum = matrice[i].reduce((accumulator, currentValue) => accumulator+currentValue);
        if(actualSum !== expectedSum)
        {
            magic=false;
            break;
        }
    }
    if(magic)
    {
        for(let i=0;i<matrice.length;i++)
        {
            let actualSum = 0;
            for(let j=0;j<matrice.length;j++)
            {
                actualSum+= matrice[j][i];
            }
            if(actualSum !== expectedSum)
            {
                magic=false;
                break;
            }
        }
    }
    console.log(magic);
}


solve([[-1,0,1],
    [1, 0, -1]]);