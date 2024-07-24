const display = document.getElementById("display");
 
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let changebtn = document.querySelector("#change-btn");
let currentMode = "light";

changebtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = " rgb(94, 183, 207)";
    }
    else if (currentMode === "dark") {
        currentMode = "black";
        document.body.style.backgroundColor = "black";
    } 
    else if (currentMode === "black") {
        currentMode = "light";
        document.body.style.backgroundColor = "blue";
    }
    else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "rgb(18, 161, 46)";
    }
    console.log(currentMode)
});
   
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    console.log(startTime)
}

function stop(){
    if (isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

