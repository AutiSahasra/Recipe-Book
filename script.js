let searchbtn=document.querySelector('#searchbtn')
let inputfield=document.querySelector('#inputfield')
let container=document.querySelector('.container')
let initmsg=document.querySelector('#initmsg')
let popup=document.querySelector('.popup')
let closepopup=document.querySelector('#closepopup')
let details=document.querySelector('#details')
async function showPopUp(reciepe)
{   
    details.innerHTML=`
    <h2>Reciepe Displayed</h2>`
    popup.style.display="block";
}

 closepopup.addEventListener('click',(e)=>{
    e.preventDefault();
    popup.style.display="none";
 })


async function fetchRecipes(q){
initmsg.style.display="flex"
  initmsg.style.color="white";
 initmsg.innerHTML='Loading....';
 const data=await fetch(`https://dummyjson.com/recipes/search?q=${q}`);
 const res= await data.json();//consuming promise
 //console.log(res);
 container.innerHTML='';
 if(res.recipes.length==0)
 {
    initmsg.innerHTML='<h2>No recipes found!</h2>'
    initmsg.style.color="red";
    initmsg.style.textAlign="center";
    return
 }
 initmsg.style.display="none"
 res.recipes.forEach(reciepe => {
    let recipeDiv=document.createElement('div')
    recipeDiv.classList.add('reciepeDiv')
    
    recipeDiv.innerHTML=`
    <img src=${reciepe.image}>
    <h2>${reciepe.name}</h2>
    <h3>Cusine: ${reciepe.cuisine}</h3>
    <h3>Calories per serving: ${reciepe.caloriesPerServing}</h3>
    `
    let button=document.createElement('button');
    button.classList.add('viewRecipe');
    button.textContent="View Recipe"
    recipeDiv.appendChild(button);
    button.addEventListener('click',reciepe=>{
        showPopUp();
    })
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