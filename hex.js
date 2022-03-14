const HexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const Btn = document.querySelector('.btn');

const Clor = document.querySelector('#Clor');

const showClrs = () =>{

    let HexClr = '#';

    for(let i = 0; i < 6; i++){
        HexClr += HexColors[getRandomNum()];
    }

   document.body.style.backgroundColor = HexClr;

   Clor.innerHTML = HexClr;
}


function getRandomNum(){
    return Math.floor(Math.random() * HexColors.length);
}





Btn.addEventListener('click',showClrs);