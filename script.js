let searchbtn=document.querySelector('#searchbtn')
let inputfield=document.querySelector('#inputfield')
let container=document.querySelector('.container')

async function fetchRecipes(q){
 const data=await fetch(`https://dummyjson.com/recipes/search?q=${q}`);
 const res= await data.json();//consuming promise
 console.log(res);
}

searchbtn.addEventListener('click',(e)=>
{
    e.preventDefault()//prevents reloading, when u click btn, performs logic
    let query=inputfield.value.trim();
    fetchRecipes(query)
    console.log("button clicked")

})