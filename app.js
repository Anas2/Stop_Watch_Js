var hours = document.getElementById('hours');
var minuts = document.getElementById('minuts');
var seconds = document.getElementById('seconds');
var milisec = document.getElementById('milisec');


var hr = hours.innerHTML = "00";
var min = minuts.innerHTML = "00";
var sec = seconds.innerHTML = "00";
var mili = milisec.innerHTML = "00";

// Get Button 
var startBtn = document.getElementById('s');
var pauseBtn = document.getElementById('p');
var resetBtn = document.getElementById('r');
pauseBtn.disabled = true;
resetBtn.disabled = true;
pauseBtn.setAttribute('style','color:#cccccc5b'); 
resetBtn.setAttribute('style','color:#cccccc5b');

var interval;


function timer() {

     interval = setInterval(() => {

        mili = + mili
        milisec.innerHTML = "0" + mili;
        mili++
        if (mili > 9) {
            mili = 0;
            sec = + sec
            sec++
            seconds.innerHTML = "0" + sec
            if (sec > 9) {
                seconds.innerHTML = sec;
                if (sec >= 59) {
                    sec = 0;
                    mili = 0;
                    min = + min;
                    min++
                    minuts.innerHTML = "0" + min;
                    if (min > 9) {
                        minuts.innerHTML = min;
                        if (min >= 59) {
                            sec = 0;
                            mili = 0;
                            min = 0;
                            hr = + hr;
                            hr++
                            hours.innerHTML = "0" + hr;
                            if (hr > 9) {
                                hours.innerHTML = hr;
                                if (hr >= 59) {
                                    sec = 0;
                                    mili = 0;
                                    min = 0;
                                    hr = 0;
                                    hr++
                                    hours.innerHTML = hr;
                                }
                            }
                        }
                    }
                }
            }
        }
    }, 100);

}

function start() {
   
    startBtn.disabled = true;
    startBtn.setAttribute("style",'color: #cccccc5b')
    pauseBtn.disabled = false;
    pauseBtn.setAttribute("style",'color: #cccccc')
    resetBtn.disabled = true
    resetBtn.setAttribute("style",'color: #cccccc5b')
    
    timer();
}
function pause(){
  
    pauseBtn.disabled = true;
    pauseBtn.setAttribute("style",'color: #cccccc5b')
    startBtn.disabled=false;
    startBtn.setAttribute("style",'color: #cccccc')
    resetBtn.disabled=false;
    resetBtn.setAttribute("style",'color: #cccccc')
  

    clearInterval(interval);
}
function reset() {

    pause();
    pauseBtn.disabled=true;
    resetBtn.disabled=true;
    pauseBtn.setAttribute("style",'color: #cccccc5b')
    resetBtn.setAttribute("style",'color: #cccccc5b')
 
    
    
    hr = 0;
    min = 0;
    sec = 0;
    mili = 0;
    hours.innerHTML = hr + "0";
    minuts.innerHTML = min + "0";
    seconds.innerHTML = sec + "0";
    milisec.innerHTML = mili + "0";
 
  }
