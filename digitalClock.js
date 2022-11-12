const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const Focus = document.querySelector("#Focus");

const showAmPm = true

function showTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    const amPm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12;

    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ""}`;

    setTimeout(showTime, 1000);

}

function addZero(n){
    return(parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet(){
    let today = new Date();
    let hours = today.getHours();

    if (hours < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Good Morning, ';
      } else if (hours < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
      } else {
        // Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
      }
    }

    function getName(){
        if(localStorage.getItem("name") === null){
            name.textContent = "[Enter Name]";
        }else {
            name.textContent = localStorage.getItem('name');
        }
    }

    function setName(e) {
        if(e.type === "keypress"){
            if(e.which == 13 || e.keyCode == 13){
                localStorage.setItem("name", e.target.innerText);
                name.blur();
            }
        }else{
            localStorage.setItem("name", e.target.innerText);
        }
    }

    function getFocus(){
        if(localStorage.getItem("Focus") === null){
            Focus.textContent = "[Enter Focus]";
        }else {
            Focus.textContent = localStorage.getItem('Focus');
        }
    }

    function setFocus(e) {
        if(e.type === "keypress"){
            if(e.which == 13 || e.keyCode == 13){
                localStorage.setItem("Focus", e.target.innerText);
                Focus.blur();
            }
        }else{
            localStorage.setItem("Focus", e.target.innerText);
        }
    }
    
    name.addEventListener("keypress", setName);
    name.addEventListener("blur", setName);
    Focus.addEventListener("keypress", setFocus);
    Focus.addEventListener("blur", setFocus);


showTime();
setBgGreet();
getName();
getFocus()
