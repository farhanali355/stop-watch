// var hourHeading = document.getElementById("hour");
// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");
// var startbtn = document.getElementById('startbtn')
// var hour = 0;
// var min = 0;
// var sec = 0;
// var msec = 0;
// var interval;

// function timer() {
//   msec++;
//   msecHeading.innerHTML = msec;

//   if (msec >= 100) {
//     sec++;
//     secHeading.innerHTML = sec;
//     msec = 0;

//     if (sec >= 60) {
//       min++;
//       minHeading.innerHTML = min;
//       sec = 0;

//       if (min >= 60) {
//         hour++;
//         hourHeading.innerHTML = hour;
//         min = 0; 
//       }
//     }
//   }
// }

// function start() {
//     interval = setInterval(timer, 10);
//     startbtn.disabled = true;

// }
// function stop() {
//     clearInterval(interval);
// }

// function reset() {
//   hour = 0;
//   min = 0;
//   sec = 0;
//   msec = 0;
//   hourHeading.innerHTML = hour;
//   minHeading.innerHTML = min;
//   secHeading.innerHTML = sec;
//   msecHeading.innerHTML = msec;
//   stop();
// }






// var hourHeading = document.getElementById('hour');
// var minHeading = document.getElementById('min');
// var secHeading = document.getElementById('sec');
// var msecHeading = document.getElementById('msec');
// var startbtn = document.getElementById("startbtn");
// var hour = 0;
// var min = 0;
// var sec = 0;
// var msec = 0;
// var interval;





// function timer() {
//     msec++;
//     msecHeading.innerHTML = msec;
//     if (msec >= 100) {
//         sec++;
//         secHeading.innerHTML = sec;
//         msec = 0;
//         if (sec >= 60) {
//             min++;
//             minHeading.innerHTML = min;
//             sec = 0;
//             if (min >= 60) {
//                 hour++;
//                 hourHeading.innerHTML = hour;
//                 min = 0;
//             }
//         }
//     }
// }


// function start() {
//     interval = setInterval(timer, 10);
//     startbtn.disabled = true;
// };
// function stop() {
//     clearInterval(interval);
//     startbtn.disabled = false;

// };

// function reset() {
//     hour = 0;
//     min = 0;
//     sec = 0;
//     msec = 0;
//     hourHeading.innerHTML = 0;
//     minHeading.innerHTML = 0;
//     secHeading.innerHTML = 0;
//     msecHeading.innerHTML = 0;
//     stop();
// }



var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var startbtn = document.getElementById('startbtn');
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval;


function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {

        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
        if (sec >= 60) {
            min++;
            minHeading.innerHTML = min;
            sec = 0;
            if (min >= 60) {
                hour++;
                hourHeading.innerHTML = hour;
                min = 0;
            }

        }

    }




}






function start() {
    interval = setInterval(timer, 10);
    startbtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    startbtn.disabled = false;
}

function reset() {

    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = 0;
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    msecHeading.innerHTML = 0;
    stop();
}

