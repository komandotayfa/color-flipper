const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexChanger = document.getElementById("hexChanger");
const color = document.querySelector(".color");

hexChanger.addEventListener("click",hexCreator);

function hexCreator() {
    let hexColor = '#';
    for (let i=0;i<6;i++){
        hexColor += hex[randomColor()];
    };
    color.textContent = hexColor;
    document.getElementById("mainContent").style.backgroundColor = hexColor;
    document.getElementById("colorBackground").style.color = hexColor;
};

function randomColor(){
    return Math.floor(Math.random() * hex.length);
};
