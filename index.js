 const Colors = ['yellow','azure','#ff00b2','purple','green'];

 const Btn = document.querySelector('.btn');

 const Clor = document.querySelector('#Clor');

 const showClrs = () =>{

    let randomNumbers = getRandomNum();

    document.body.style.backgroundColor = Colors[randomNumbers];

    Clor.innerHTML = Colors[randomNumbers];
 }


 function getRandomNum(){
     return Math.floor(Math.random() * Colors.length);
 }

Btn.addEventListener('click',showClrs);