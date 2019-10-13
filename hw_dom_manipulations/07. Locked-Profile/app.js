function lockedProfile() 
{
    let buttons = document.querySelectorAll("#main > div > button");

    for(let b of buttons)
    {
        b.addEventListener('click', e => showMore(e.target));
    }

    function showMore(target)
    {
        let locked = target.parentNode.children[2].checked;
        let hiddenFields = target.parentNode.children[9];
        let button = target.parentNode.children[10];

        if(!locked)
        {
            if(button.textContent == 'Show more')
            {
                button.textContent = 'Hide it';
                hiddenFields.style.display = 'block';
            }
            else
            {
                button.textContent = 'Show more';
                hiddenFields.style.display = 'none';
            }
        }
    }
}