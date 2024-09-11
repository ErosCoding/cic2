//


const navOnHover =() =>{
let op = document.getElementsByClassName('divGeral');

op[0].style=" justify-content: center;flex-wrap: wrap;display: inline-flex;margin-left:70px;margin-right: auto;height: 200px;width: 600px;display: inline-flex;border-bottom: 2px solid ;"


}

const navOutHover =() =>{
    let op = document.getElementsByClassName('divGeral');
    op[0].style=" justify-content: center;flex-wrap: wrap;display: inline-flex;margin-left:70px;margin-right: auto;height: 200px;width: 600px; display: none;border-bottom: 2px solid ;"


}

const  navFunction = (nav) => {
let container = document.getElementById('container-main');
if(document.documentElement.scrollTop >= 238 ){
        nav.setAttribute("class","Onsticky");
       
        container.setAttribute("class","display-in ContainerSticky");

}else if(document.documentElement.scrollTop < 238){
        nav.removeAttribute('class');
        nav.setAttribute("class","Ofsticky");
        container.setAttribute("class","display-in container-main");
       
      
        

}
    

console.log("fim do bloco");



}