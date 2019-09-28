function solve(commands)
{
    let result = [];
    
    let i = 0;
    for(command of commands)
    {
        ++i;
        switch(command)
        {
            case 'add':
                result.push(i);
                break;

            case 'remove':
                result.pop();
                break;
        }
    }

    if(result.length == 0)
    {
        console.log('Empty');
    }
    else
    {
        console.log(result.join('\n'));
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']);

solve(['remove', 
'remove', 
'remove']);