function solve(input)
{
    function equalDiagSum(matrix)
    {
        let sum1 = 0, sum2 = 0;
        for(let i=0;i<matrix.length;i++)
        {
            sum1 += matrix[i][i];
            sum2 += matrix[matrix.length-i-1][i];
        }
        if(sum1===sum2) return sum1;
        return 0;
    }

    function getModifiedMatrix(number, matrix)
    {
        let newMatrix = matrix;

        for(let i=0;i<matrix.length;i++)
        {
            for(let j=0;j<matrix.length;j++)
            {
                if(i!=j && i+j != matrix.length-1)
                {
                    newMatrix[i][j] = number;
                }
            }
        }

        return newMatrix;
    }

    let matrix = [];

    for(let line of input)
    {
        matrix.push(line.split(' ').map(x => Number(x)));
    }

    let diagSum = equalDiagSum(matrix);
    if(diagSum)
    {
        matrix = getModifiedMatrix(diagSum, matrix);
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);