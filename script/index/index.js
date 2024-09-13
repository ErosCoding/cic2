//


const navOnHover =() =>{
let op = document.getElementsByClassName('divGeral');

op[0].style=" justify-content: center;flex-wrap: wrap;background-color:white;display: inline-flex;height: 50px;width: 1800px;display: inline-flex;animation: opAnimated 1s linear forwards;position: absolute;transition: all 1.5s ease;"  


}


const OnclikGeral =() =>{
        let divGeral = document.getElementsByClassName('divGeral');
        let op1 = document.getElementsByClassName('op');

        if(op1[1].value == 'true'){
                divGeral[0].style="display: none"
                op1[1].value = 'false';     
        }else if(op1[1].value === undefined || op1[1].value == 'false')
        {
                divGeral[0].style=" box-shadow: inset;justify-content: center;flex-wrap: wrap;background-color:white;display: inline-flex;height: 50px;width: 1800px;display: inline-flex;position: absolute;";
                op1[1].value = 'true';  
        }
      
}


const navOutHover =() =>{
    let op = document.getElementsByClassName('divvalue');
    op[0].style="display: none"


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