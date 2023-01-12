
function myfunction(){

let a =0;

let name = document.getElementById("username").value;
let comment = document.getElementById("comment").value;

let main = document.querySelector('.main')

main.innerHTML +=`

<div class="comment">
<h2>${name}</h2>
<h3>${comment}</h3>
<div class="likes">
    <label id="z"> ${a} likes </label>
    <i class="fa-regular fa-thumbs-up a"></i>
    <i class="fa-regular fa-thumbs-down b"></i>
    <i class="fa-solid fa-trash c"></i> 
</div> 
`

let up = document.querySelectorAll('.a');

up.forEach(function (item){
    item.addEventListener('click',function(){

        let text = this.parentElement.firstElementChild;
        text.innerHTML = parseInt(text.innerHTML) + 1 +" Likes";

    })

})

const down = document.querySelectorAll('.b');

down.forEach(function (item){
    item.addEventListener('click',function(){

        let text = this.parentElement.firstElementChild;
        let count = parseInt(text.innerHTML) - 1;
        if(count>=0){
            text.innerHTML = count +" likes"
        }
    })

})
    
const trash = document.querySelectorAll('.c');

trash.forEach(function (item){
    item.addEventListener('click',function(){

        this.parentElement.parentElement.remove();
    })

})
}
