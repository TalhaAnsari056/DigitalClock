var hourSp= document.getElementById("hours");
var minuteSp= document.getElementById("minutes");
var secondSp= document.getElementById("seconds");
var monthSp= document.getElementById("months");
var dateSp= document.getElementById("dates");
var daySp= document.getElementById("days");

// hourSp.innerText=100
// var Time = new Date();
// hourSp.innerText=Time.getHours();
// minuteSp.innerText=Time.getMinutes();
// secondSp.innerText=Time.getSeconds();
// monthSp.innerText=Time.getMonth();
// dateSp.innerText=Time.getDate();
// daySp.innerText=Time.getDay();
setInterval(()=>{
    var Time = new Date();
    hourSp.innerText=Time.getHours();
    minuteSp.innerText=Time.getMinutes();
    secondSp.innerText=Time.getSeconds();
    monthSp.innerText=Time.getMonth();
    dateSp.innerText=Time.getDate();
    daySp.innerText=Time.getDay();
//     if (getHours>12) {
//         // var Time = new Date();
//         hourSp.innerText=Time.getHours()-12;
//     minuteSp.innerText=Time.getMinutes();
//     secondSp.innerText=Time.getSeconds();
// } else {
//     hourSp.innerText=Time.getHours();
//     minuteSp.innerText=Time.getMinutes();
//     secondSp.innerText=Time.getSeconds();
//     }
        
},1000)