

setInterval(()=>{
    let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
  if(hours>=12){
    hours.innerHTML = "12"
  }

 let dateClock = new Date()
   hours.innerHTML = dateClock.getHours();
   minutes.innerHTML  = dateClock.getMinutes();
   seconds.innerHTML =  dateClock.getSeconds();

},1000)