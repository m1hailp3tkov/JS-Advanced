function solve(input)
{
    let board = [[false,false,false],[false,false,false],[false,false,false]];

    function isBoardFull(board)
    {
        for(let i=0;i<3;i++)
        {
            if(board[i].some(x => !x)) return false;
        }
        return true;
    }

    function checkForWinner(board)
    {
        let win;

        for(let i=0;i<3;i++)
        {
            //row check
            let row = board[i];
            win = same3Check(row);
            if(win) return win;

            //col check
            let col = [];
            for(let j=0;j<3;j++)
            {
                col.push(board[j][i]);
            }

            win=same3Check(col);
            if(win) return win;
        }

        //diag check
        let diag1 = [], diag2= [];
        for(let j=0;j<3;j++)
        {
            diag1.push(board[j][j]);
            diag2.push(board[j][2-j]);
        }

        win = same3Check(diag1);
        if(win) return win;
        win = same3Check(diag2);
        if(win) return win;

        return win;
    }

    function same3Check(arr)
    {
        if(arr.every(x => x == 'X'))
        {
            return 'X';
        }
        if(arr.every(x => x == 'O'))
        {
            return 'O';
        }
    }

    function printBoard(board)
    {
        board.forEach(x => 
        {
            console.log(x.join('\t'));
        });
    }

    let playerXmove = true;
    for(let move of input)
    {
        let [x,y] = move.split(' ');

        if(!board[x][y])
        {
            playerXmove ? board[x][y]='X' : board[x][y] = 'O';
            playerXmove = !playerXmove;
        }
        else 
        {
            console.log("This place is already taken. Please choose another!");
        }

        let winner = checkForWinner(board);
        if(winner)
        {
            console.log(`Player ${winner} wins!`);
            printBoard(board);
            break;
        }
        if(isBoardFull(board))
        {
            console.log('The game ended! Nobody wins :(');
            printBoard(board);
            break;
        }
    }
}

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);