let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function() {
 let username = document.getElementById("username").value;
 let comment = document.getElementById("comment").value;
 let commentSection = document.getElementById("comment-section");
 let newComment = document.createElement("div");
 newComment.innerHTML = `
 <p>${username}: ${comment}</p>
 <button class="like-btn">Like</button>
 <button class="dislike-btn">Dislike</button>
 <button class="delete-btn">Delete</button>
 <span class="likes">0</span>
 <span class="dislikes">0</span>
 `;
 commentSection.appendChild(newComment);
});
let likeBtns = document.getElementsByClassName("like-btn");
for (let i = 0; i < likeBtns.length; i++) {
 likeBtns[i].addEventListener("click", function() {
 let likes = this.nextSibling.nextSibling.nextSibling;
 likes.innerHTML = parseInt(likes.innerHTML) + 1;
 });
}
let dislikeBtns = document.getElementsByClassName("dislike-btn");
for (let i = 0; i < dislikeBtns.length; i++) {
 dislikeBtns[i].addEventListener("click", function() {
 let dislikes = this.nextSibling;
 dislikes.innerHTML = parseInt(dislikes.innerHTML) + 1;
 });
}
let deleteBtns = document.getElementsByClassName("delete-btn");
for (let i = 0; i < deleteBtns.length; i++) {
 deleteBtns[i].addEventListener("click", function() {
 this.parentNode.remove();
 });
}

// let text = document.getElementById("z").innerText;
//         console.log(text)
//         const array = text.split(" ");
//         console.log(array[0])
//         let string = array[0];
//         let count = parseInt(text);
//         console.log(typeof(count));
//         let op = count+1;
//         console.log(op);
//         this.like = document.getElementById("z")
//         this.like.innerText = `${op} likes`


// a++;
//         this.item = document.getElementById("z")
//         this.item.innerText=`${a} Likes`