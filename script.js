let btn=document.getElementById("add-button");
let text=document.getElementById("text");
let notesCon =document.getElementById("notes-con");
let color=document.getElementById("color")
function addNotes(){
    if(text.value=== ""){
        alert("enter some text");
        return;
    }
    message.innerText="";
let div=document.createElement("div");
    let p=document.createElement("p");
let crossBtn=document.createElement("button");
//to merge p and btn in div 
console.log(div,p,crossBtn);
div.appendChild(p);
div.appendChild(crossBtn);
crossBtn.innerText="X";
p.innerText=text.value;
crossBtn.addEventListener("click", () => {
    div.remove();
    if (notesCon.children.length === 0) {
        message.innerText = "you haven't added any notes";
    }
});

div.style.backgroundColor=color.value;
notesCon.appendChild(div);
console.log(div);
text.value = "";

}

btn.addEventListener("click",addNotes);