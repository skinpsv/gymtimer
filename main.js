const nume = "BODY UNDER CONSTRUCTION";
const prenume = "Mind on a mission";
var interval = 499;
var timer4 = document.getElementById('timer');
let default2 = 120;
const view = {
    show : function(target){
        target.style.display = 'block';
    },
    hide : function(target){
        target.style.display = 'none';
    },
    schimbaBg : function(){document.body.style.backgroundColor == "white"? document.body.style.backgroundColor = "#7db9e8" :document.body.style.backgroundColor = "white";
        }
};

var butoane = {
    startTimer90: ()=>{
        default2 = 90;
        sec90.classList.add('active');
        sec120.classList.remove('active');
        sec60.classList.remove('active');
        //this.startTimer
    },
    startTimer120: ()=>{
        default2 = 120;
        sec90.classList.remove('active');
        sec120.classList.add('active');
        sec60.classList.remove('active');
        // this.startTimer
    },
    startTimerCustom: (x)=>{
        default2 = x;
        this.startTimer
    },
    startTimer60: ()=>{
        default2 = 60;
        sec90.classList.remove('active');
        sec120.classList.remove('active');
        sec60.classList.add('active');
        // this.startTimer
    },

    startTimer: ()=>
        {
            view.hide(butonPlus);
            view.show(timer4);
            timer4.innerHTML=interval;
            view.show(butonStop);
            document.body.style.backgroundColor = "#7db9e8";
            timerO.counter();
            cordova.plugins.backgroundMode.enable();
            //window.plugin.backgroundMode.enable();
        }
}

console.log(interval);
var timerO = {
    interval : 500,
    counter : function(){   
        interval = default2;
        this.cisc = setInterval(function(){
        //interval = default2;
        if(interval>0){
        interval--;
        
        
        document.getElementById('timer').innerHTML = interval;
        }else{
            //view.schimbaBg();
            //clearInterval(this.cisc);
            timerO.stopCount(default2);
            vibratie();
            
        }}
        , 1000);
    },
    stopCount: function(w){
        clearInterval(this.cisc);
        //view.schimbaBg();
        view.show(butonPlus);
        document.body.style.backgroundColor = "white";
        //vibratie();
        interval = w;
        view.hide(butonStop);
        view.hide(document.getElementById('timer'));
        element.forEach((buton)=> { buton.classList.remove("active")});
        butonActiv();
        cordova.plugins.backgroundMode.disable();
    }
}

let bgColor = "white";
document.body.style.backgroundColor = bgColor;

function foo(){
    document.getElementById('timer').style.display='none';
    document.getElementById('stop').style.display='none';
    const accountNume = document.getElementById('nume');
    let compunere = nume.toUpperCase();
    let compunere2 = prenume.toUpperCase();

    accountNume.innerHTML = compunere + '<br> ' + compunere2;
    //.innerHTML = nume+' '+prenume;
  };
const butonPlus = document.getElementById('plus');
const butonStop = document.getElementById('stop');

// butonPlus.style.display = 'none';
butonPlus.addEventListener('click', changeBg, false);
butonStop.addEventListener('click', cocos, false);
function changeBg(event){
    
    view.hide(event.target);
    view.show(document.getElementById('timer'));
    timer4.innerHTML=default2;
    view.show(butonStop);
    view.schimbaBg();
    timerO.counter();
}
function cocos(event){
    view.hide(event.target);
    view.hide(document.getElementById('timer'));
    console.log(event.target);
    //view.show(butonPlus);
    
    timerO.stopCount(default2);

    
    interval = w;
}
const sec120 = document.getElementById('sec120');
const sec90 = document.getElementById('sec90');
const sec60 = document.getElementById('sec60');

sec90.addEventListener('click', butoane.startTimer90, false);
sec60.addEventListener('click', butoane.startTimer60, false);
sec120.addEventListener('click', butoane.startTimer120, false);
var element = document.querySelectorAll(".selector");
console.log(element);
cordova.plugins.backgroundMode.overrideBackButton();


function vibratie(){
    navigator.vibrate([500, 500, 500, 500, 1000]);
    console.log('ajunge aici');
}

function butonActiv(){
    if(default2==90){
        sec90.classList.add("active");
    }else if(default2==60){
        sec60.classList.add("active");
    }else{
        sec60.classList.add("active");
    }
}

