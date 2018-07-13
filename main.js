const nume = "John";
const prenume = "Smith";
const view = {
    show : function(target){
        target.style.display = 'block';
    },
    hide : function(target){
        target.style.display = 'none';
    },
    schimbaBg : function(){
        if(document.body.style.backgroundColor == "yellow"){
            document.body.style.backgroundColor = "blue"
        } else {
            document.body.style.backgroundColor = "yellow";
        }
    }
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
    view.show(butonStop);
    view.schimbaBg();
}
function cocos(event){
    view.hide(event.target);
    view.hide(document.getElementById('timer'));
    console.log(event.target);
    view.show(butonPlus);
    view.schimbaBg();
}