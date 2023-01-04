
const dataPost = [
    {
        profilePic:'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a77-en/middlebanner/a77-orange-640x480.jpg.thumb.webp',
        name:'Mobile',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80',
        name:'Laptop',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlESmv1_XGtIA-iFaeZo3w_qSWHyfevf5hbILplhpgbmnSjZAj7kAP8MsntbtuzOa3b5I&usqp=CAU',
        name:'Camera',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dNHcaLstSTIX8YCZZ9Gc2JSQxynW-LevuA&usqp=CAU',
        name:'Desktop',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://images.indianexpress.com/2021/01/Apple-AirPods-Max-Gold-Edition-by-Caviar.jpg',
        name:'Headphones',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a77-en/middlebanner/a77-orange-640x480.jpg.thumb.webp',
        name:'Mobile',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dNHcaLstSTIX8YCZZ9Gc2JSQxynW-LevuA&usqp=CAU',
        name:'Desktop',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://images.indianexpress.com/2021/01/Apple-AirPods-Max-Gold-Edition-by-Caviar.jpg',
        name:'Headphones',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a77-en/middlebanner/a77-orange-640x480.jpg.thumb.webp',
        name:'Mobile',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlESmv1_XGtIA-iFaeZo3w_qSWHyfevf5hbILplhpgbmnSjZAj7kAP8MsntbtuzOa3b5I&usqp=CAU',
        name:'Camera',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dNHcaLstSTIX8YCZZ9Gc2JSQxynW-LevuA&usqp=CAU',
        name:'Desktop',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        profilePic:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80',
        name:'Laptop',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
   ]



const container = document.querySelector('.container');


dataPost.forEach(function(item){
    container.innerHTML +=
    `<div class="posts">
    <div class="profileInfo">
        <img src=${item.profilePic} alt="profileImg">
        <div class="block">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        </div>
    </div>
    <button class="btn1">add to cart</button><button class="btn2">Buy now</button>
    </div>`
    
    
})

let btn1 = document.querySelectorAll('.btn1')

let  a = 0;
let b=0;

btn1.forEach(function(cart){

    cart.addEventListener('click',function(){
        if(this.innerHTML === `add to cart`){
            this.innerHTML=`added to cart`;
            a++;
             
        }
        else{
            this.innerHTML = `add to cart`;
            a--;
            
        }
        const nav = document.querySelector('.navBar')



        nav.innerHTML = 
        `<div class="logo">
            <h2>EcoM</h2>
        </div>
        <div class="links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>cart->${a}</li>
            </ul>
        </div>`

    
})
})

const nav = document.querySelector('.navBar')



        nav.innerHTML = 
        `<div class="logo">
            <h2>EcoM</h2>
        </div>
        <div class="links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>cart->${a}</li>
            </ul>
        </div>`




const body = document.body;

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    body.classList.toggle('dark');
})


