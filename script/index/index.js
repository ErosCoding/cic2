//

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