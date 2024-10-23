/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    const miReloj =document.getElementById('clock');
    console.log(miReloj);
    console.dir(miReloj);

    miReloj.innerText="Holahola!";
}



function randInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function changeEmojiColor(elem){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    elem.style.fill='rgb('+ r + ',' + g + ','+b +')';
}

function hover(elem){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    elem.style.fill='rgb('+ r + ',' + g + ','+b +')';
}

function changething(elem){
    console.log("hola");
    const unVar = document.getElementsByTagName("main");
    unVar[0].style.backgroundImage= "url('../assets/img/moonlit-lake.jpg')";
}
