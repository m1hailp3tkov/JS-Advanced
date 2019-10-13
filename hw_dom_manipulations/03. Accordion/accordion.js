function toggle() 
{
    const div = document.getElementById('extra');

    const button = document.getElementsByClassName("button")[0] 

    if(button.innerHTML == 'More')
    {
        button.innerHTML = 'Less';
        div.style.display = 'block';
    }
    else
    {
        button.innerHTML = 'More';
        div.style.display = 'none';
    }
}