function create(words) 
{
   const content = document.getElementById('content');

   for(let word of words)
   {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.addEventListener('click', e => showText(e));

      div.appendChild(paragraph);
      content.appendChild(div);
   }

   function showText(e)
   {
      e.target.children[0].style.display = 'block';
   }
}