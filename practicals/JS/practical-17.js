var clock = document.getElementById("clock");
var greeting = document.getElementById("greeting");
var nameField = document.getElementById("name");
var todayDate = document.getElementById("date");

nameField.addEventListener("keydown",setName);
nameField.addEventListener("blur",setName);

function showDate(){
    const date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var g = hour>=12 ? " PM":" AM";

    greeting.innerHTML = greet(hour);
    todayDate.innerHTML = date.toDateString();

    if(hour>12) hour-=12;

    var time = zeros(hour)+":"+zeros(minutes)+":"+zeros(second)+g;
    
    clock.innerHTML = time;
    console.log(time);
    setTimeout(showDate,1000);

    function zeros(num){
        return num<10?"0"+num:num;
    }
    function greet(num){
        let greeting = num < 18 ? num < 12? "Good Morning" : "Good Afternoon" : "Good Evening";
        let imageName = greeting.replace(" ","_");
        document.body.style.backgroundImage = 'url("imgsrc/'+imageName+'.jpg")';
        return greeting;
    }
}   
function getName(){
    if(localStorage.getItem('myName') != null){
        nameField.innerHTML = localStorage.getItem('myName');
    }else{
        console.log("runn");
        nameField.innerHTML = "[Enter Name]";
    }
}
function setName(e){
    if(e.type === "keydown"){
        console.log(e.keyCode == 13);
        if(e.keyCode == 13){
            localStorage.setItem('myName',e.target.innerHTML);
            nameField.blur();
        }
    }else{
        console.log(e);
        localStorage.setItem('myName',e.target.innerHTML);
    }
}

getName();
showDate();