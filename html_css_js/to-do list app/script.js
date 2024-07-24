const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask(){
    if(inputbox.value === ''){
        alert("Please write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedData();
    }
}, false);

function savedData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();