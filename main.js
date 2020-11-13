//DOM Elements
const time = document.getElementById('time')
greeting = document.getElementById('greeting'),
greeting = document.getElementById('name'),
greeting = document.getElementById('focus');

//show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //Set AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12hr Format
    hour = hour % 12 || 12;

    //OutPut Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;


    setTimeout(showTime, 1000);
}
//Add Zero
function addZero(n){
    return(parseInt(n, 10)<10? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour< 12){
        //Morning
        document.body.style.backgroundImage = "url('../img/Morning.jpg')";
        greeting.textContent ='Good Morning';

    }
    else if(hour<18){
        //Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent ='Good Afternoon';
    }
    else{
        //Evening
        document.body.style.backgroundImage = "url('../img/night-night.jpg')";
        greeting.textContent ='Good Evening';
        document.body.style.color = 'white';
    }
}
//Get NAme
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent ='[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

//set Name
function setName() {
    if(e.type === 'keypress') {
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();


        }

    }else{
        localStorage.setItem('name',e.target.innerText);
    }
}
//Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent ='[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

//set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        //Makesure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}
//name.addEventListener('keypress', setName);
//name.addEventListener('blur', setName);
//focus.addEventListener('keypress', setFocus);
//focus.addEventListener('blur',setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();