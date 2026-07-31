let searchbtn=document.querySelector('#searchbtn')
let inputfield=document.querySelector('#inputfield')
let container=document.querySelector('.container')

async function fetchRecipes(q){
 const data=await fetch(`https://dummyjson.com/recipes/search?q=${q}`);
 const res= await data.json();//consuming promise
 console.log(res);
 res.recipes.forEach(reciepe => {
    let recipeDiv=document.createElement('div')
    recipeDiv.classList.add('reciepeDiv')
    
    recipeDiv.innerHTML=`
    <img src=${reciepe.image}>
    <h2>Name: ${reciepe.name}</h2>
    <h2>Cusine: ${reciepe.cuisine}</h2>
    <h2>Calories per serving: ${reciepe.caloriesPerServing}</h2>
    `
    container.appendChild(recipeDiv)
 });
 
}

searchbtn.addEventListener('click',(e)=>
{
    e.preventDefault()//prevents reloading, when u click btn, performs logic
    let query=inputfield.value.trim();
    fetchRecipes(query)
    console.log("button clicked")

})