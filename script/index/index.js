//

const  navFunction = (position) => {
var nav = document.getElementById('nav-header');

var htotal = window.innerHeight;


let aux = htotal - 255;

position--;
console.log(document.documentElement.scrollTop);

if(document.documentElement.scrollTop >= 238 ){
        nav.setAttribute("class","Onsticky");
        console.log("if 01");

}else if(document.documentElement.scrollTop < 238){
        nav.removeAttribute('class');
        nav.setAttribute("class","Ofsticky");
        console.log("if 02");

}
    

console.log("fim do bloco");



}