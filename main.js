const nume = "John";
const prenume = "Smith";
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
    schimbaBg : function(){document.body.style.backgroundColor == "yellow"? document.body.style.backgroundColor = "blue":document.body.style.backgroundColor = "yellow";
        }
};

var butoane = {
    startTimer90: ()=>{
        default2 = 90;
        sec90.classList.add('active');
        //this.startTimer
    },
    startTimer120: ()=>{
        default2 = 120;
        sec120.classList.add('active');
        // this.startTimer
    },
    startTimerCustom: (x)=>{
        default2 = x;
        this.startTimer
    },
    startTimer60: ()=>{
        default2 = 6;
        sec60.classList.add('active');
        // this.startTimer
    },

    startTimer: ()=>
    {
    view.hide(butonPlus);
    view.show(timer4);
    timer4.innerHTML=interval;
    view.show(butonStop);
    view.schimbaBg();
    timerO.counter();
    }
}

console.log(interval);
var timerO = {
    interval : 500,
    counter : function(){   
        interval = default2;
        this.cisc = setInterval(function(){
        //interval = default2;
        if(interval>0){interval--;
        document.getElementById('timer').innerHTML = interval;
        }else{
            view.schimbaBg();
            this.stopCount();
        }}
        , 1000);
    },
    stopCount: function(w){clearInterval(this.cisc);
    interval = w;}
}

bgColor = "yellow";
document.body.style.backgroundColor = bgColor;

function foo(){
    document.getElementById('timer').style.display='none';
    document.getElementById('stop').style.display='none';
    const accountNume = document.getElementById('nume');
    let compunere = nume.toUpperCase();
    let compunere2 = prenume.toUpperCase();

    accountNume.innerHTML = compunere + ' ' + compunere2;
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
    view.show(butonPlus);
    view.schimbaBg();
    timerO.stopCount(default2);
    element.forEach((buton)=> {buton.classList.remove("active")});
}
const sec120 = document.getElementById('sec120');
const sec90 = document.getElementById('sec90');
const sec60 = document.getElementById('sec60');

sec90.addEventListener('click', butoane.startTimer90, false);
sec60.addEventListener('click', butoane.startTimer60, false);
sec120.addEventListener('click', butoane.startTimer120, false);
var element = document.querySelectorAll(".selector");
console.log(element);