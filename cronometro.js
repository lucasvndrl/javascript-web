"use strict"

var hour = 0;
var minute = 0;
var second = 0;

var tempo = 1000; //Milésimos em 1 segundo
var cron;

function start(){
    cron = setInterval(() => { timer(); }, tempo);
}

function pause(){
    clearInterval(cron);
   
}

function stop(){
    clearInterval(cron);
    hour = 0;
    minute = 0;
    second = 0;

    document.getElementById('counter').innerText = '00:00:00';
}



function timer(){

    second++;
    
    if(second == 60){
        second = 0;
        minute++;

        if (minute == 60){
            minute = 0;
            hour++;
        }
    }
    var format = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    document.getElementById('counter').innerText = format;
}

