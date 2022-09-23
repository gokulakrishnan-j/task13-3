document.body.innerHTML=`<div class="top">Mackup product</div><div id="container"></div>`

function image(data){
data.map((convert)=>{
console.log(convert)
var store=document.querySelector('#container')
store.innerHTML+=`<div class=fullBody ><div class="nameEdit"><div class="edit">${convert.name}</div></div>
<div  class="edit"><img class="img"src="${convert.api_featured_image}" alt="${convert.name}"></div>
<div  class="edit">Brand : ${convert.brand
}</div>
<div  class="edit"> Id : ${convert.id}</div>
</div>`
})
}



fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
	.then(response => response.json())
	.then(response => image(response))
	.catch(err => console.error(err));


