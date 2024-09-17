//


const navOnHover =() =>{
let op = document.getElementsByClassName('divGeral');

op[0].style=" justify-content: center;flex-wrap: wrap;background-color:white;display: inline-flex;height: 50px;width: 1800px;display: inline-flex;animation: opAnimated 1s linear forwards;position: absolute;transition: all 1.5s ease;"  


}


 const OnclikNav =() =>{

        //Criação de obj's
        let divGeral = document.getElementsByClassName('divGeral');
        let divCadastros = document.getElementsByClassName('divCadastros');
        let divCargas = document.getElementsByClassName('divCargas');
        let divGerenciamento = document.getElementsByClassName('divGerenciamento');
        let op = document.getElementsByClassName('op');
     
        const pageGeral = [
                'guia',
                'guia2'
                ];

        // Unifica a estrutura das guias em uma função Js
        let htmlContent = "<div class='divText'>";
        pageGeral.forEach((page) =>{
                htmlContent +=`<div id="${page}" class='opgeral'>Lorem ipsum </div>`
        }
        );
     
        if(op[0].value == 'true'){
                divGeral[0].style="display: none"
                op[0].value = 'false';     
        }else if(op[0].value === undefined || op[0].value == 'false')
        {
                divGeral[0].style=" box-shadow: inset;justify-content: center;flex-wrap: wrap;display: inline-flex;height: 50px;width: 1800px;display: inline-flex;position: absolute;";
                divGeral[0].innerHTML = htmlContent + '</div>';
                op[0].value = 'true';  
        }
      
}


const navOutHover =() =>{
    let op = document.getElementsByClassName('divvalue');
    op[0].style="display: none"


}



function navFunction(nav){
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
window.OnclikNav = OnclikNav;
window.navFunction = navFunction;