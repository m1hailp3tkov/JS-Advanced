function solve() 
{
   let searchBtn = document.getElementById('searchBtn');
   searchBtn.addEventListener('click', search);

   function search()
   {
      let input = document.getElementById("searchField");
      let tbody = document.querySelector("body > table > tbody").children;

      for(let trow of tbody)
      {
         trow.removeAttribute('class');
         trow.classList.remove('select');

         if(Array.from(trow.children).some(td => td.textContent.includes(input.value)))
         {
            trow.classList.add('select');
         }
      }

      input.value = '';
   }
}