const nume = "John";
const prenume = "Smith";
bgColor = "yellow";
document.body.style.backgroundColor = bgColor;
function foo(){
    const accountNume = document.getElementById('nume');
    let compunere = nume.toUpperCase();
    let compunere2 = prenume.toUpperCase();

    accountNume.innerHTML = compunere + ' ' + compunere2;
    //.innerHTML = nume+' '+prenume;
  };
const butonPlus = document.getElementById('plus');
butonPlus.addEventListener('click', changeBg, false);

function changeBg(){
    if(document.body.style.backgroundColor == "yellow"){
        document.body.style.backgroundColor = "green"
    } else {
        document.body.style.backgroundColor = "yellow";
    }
    
}
function cocos(){
    console.log('test');
}