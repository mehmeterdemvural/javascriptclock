let nameInput; 
nameInput = document.querySelector ("#myName");
nameInput.innerHTML = prompt("Lütfen İsminizi Yazınız");


function showTime(){
    let clock = new Date();
    clock = clock.toLocaleTimeString();
    document.querySelector("#myClock").innerHTML = clock;
    setTimeout(showTime , 1000);
}