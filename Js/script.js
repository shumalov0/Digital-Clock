let  hour = document.getElementById('hour');
let  minute = document.getElementById('minute');
let  seconds = document.getElementById('seconds');

let clock = setInterval(
  function time(){
    let dateNow = new Date();
    let hrs = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec= dateNow.getSeconds();

    if(hrs<10){
        hrs = '0'+ hrs;
    }
    if(min<10){
        min= '0'+ min;
    }
    if(sec<10){ 
        sec= '0'+ sec;
    }

    hour.textContent= hrs;
    minute.textContent= min;
    seconds.textContent=sec;

  },1000
);
