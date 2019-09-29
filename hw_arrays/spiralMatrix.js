function solve(width,height)
{
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

    let x=0,y=0;
    let direction = 0;

    for(let i=1;i<=height*width;i++)
    {
        matrix[y][x] = i;
        if(i===width*height) break;
        switch(direction)
        {
            case 0: // right
                if(x===width-1 || matrix[y][x+1] !== ' ')
                {
                    direction++;
                    i--;
                }
                else
                {
                    x++;
                }
                break;

            case 1: // down
                if(y===height-1 || matrix[y+1][x] !== ' ')
                {
                    direction++;
                    i--;
                }
                else
                {
                    y++;
                }
                break;

            case 2: // left
                if(x===0 || matrix[y][x-1] !== ' ')
                {
                    direction++;
                    i--;
                }
                else
                {
                    x--;
                }
                break;

            case 3: //up
                if(matrix[y-1][x] !== ' ')
                {
                    direction++;
                    i--;
                }
                else
                {
                    y--;
                }
                break;
        }

        direction %= 4;
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

solve(5,5);