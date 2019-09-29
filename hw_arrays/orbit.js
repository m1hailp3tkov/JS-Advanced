function solve(input)
{
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];
    
    //initialize matrix
    let matrix = [];
    for(let i=0;i<height;i++)
    {
        let row = [];
        for(let j=0;j<width;j++)
        {
            row.push(' ');
        }
        matrix.push(row);
    }

    //solve
    for(let i=0;i<height;i++)
    {
        for(let j=0;j<width;j++)
        {
            matrix[i][j]=Math.max(Math.abs(i-x), Math.abs(j-y))+1;
        }
    }

    matrix.forEach(x => console.log(x.join(' ')));
}
