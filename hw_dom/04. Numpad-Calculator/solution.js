function solve() {

    let expression = '123';
    let x,y;

    let clearBtn = document.getElementsByClassName('clear')[0];
    clearBtn.addEventListener('click', clearExpression);

    let buttons = document.getElementsByClassName('keys')[0].querySelectorAll('button');

    console.log(buttons);

    function clearExpression()
    {
        console.log(expression);
        expression = '';

        console.log(expression);
    }

    function resolveKey(button)
    {
        console.log(x);
    }

    console.log(clearBtn);
}