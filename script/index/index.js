



 const OnclikNav =(guia) =>{
                
        //Criação de obj's
        let divGeral = document.getElementsByClassName('divGeral');
        let divCadastros = document.getElementsByClassName('divCadastros');
        let divCargas = document.getElementsByClassName('divCargas');
        let divGerenciamento = document.getElementsByClassName('divGerenciamento');
        let op = document.getElementsByClassName('op');
     
        
        const pageGeral = [
                'Centros de Custo',
                'Unidades',
                'Enderecos',
                'Identificar Codigos de Integracao e Unidades'
                ];

        
        const pageCadastros= [
                'Entidades',
                'Sistemas de Origem',
                'Tipo de Cargos Adequados',
                'Tipos de Centros de Custo',
                'Tipos de Dados da Carga',
                'Tipos de Servico',
                'Tipos de Unidade'


        
        ];

        const pageCargas= [
                'Conta de Agua',
                'Carregar Custos com Agua',
                'Conta de Energia',
                'Carregar Custos com Energia',
                'Regularizar Contestacao-Custos com Energia',
                'Conta de Telefonia',
                'Carregar Custos com Telefonia'
        
        ];

        const pageGerenciamento= [




        
        ];

        // Unifica a estrutura das guias em uma função Js
        let txtGeral = "<div class='divText'>";
        let txtCadastros = "<div class='divText'>";
        let txtCargas = "<div class='divText'>";
        let txtGerenciamento = "<div class='divText'>";
        pageGeral.forEach((page) =>{
               txtGeral  += div(page,'opgeral','','','','');
        }
        );
        pageCadastros.forEach((page) =>{
                txtCadastros +=div(page,'opgeral','','','','');
        }
        );
        pageCargas.forEach((page) =>{
                txtCargas +=div(page,'opgeral','','','','');
        }
        );
        pageGerenciamento.forEach((page) =>{
                txtGerenciamento +=div(page,'opgeral','','','','');
        }
        );
     if(guia == 'geral'){
        limparGuias();
        if(op[0].value == 'true'){
                divGeral[0].style="display: none";
                op[0].value = 'false';     
        }else if(op[0].value === undefined || op[0].value == 'false')
        {
                divGeral[0].style=" box-shadow: inset;justify-content: center;flex-wrap: wrap;display: inline-flex;height: 50px;display: inline-flex;position: absolute;";
                divGeral[0].innerHTML = txtGeral + '</div>';
                op[0].value = 'true';  
        } 
     }
     else if(guia == 'cadastro'){
        limparGuias();
        if(op[1].value == 'true'){
                divCadastros[0].style="display: none"
                op[1].value = 'false';     
        }else if(op[1].value === undefined || op[1].value == 'false')
        {
                divCadastros[0].style=" box-shadow: inset;justify-content: center;flex-wrap: wrap;display: inline-flex;height: 50px;display: inline-flex;position: absolute;";
                divCadastros[0].innerHTML = txtCadastros + '</div>';
                op[1].value = 'true';  
        } 
     }
     else if(guia == 'cargas'){
        limparGuias();
        if(op[2].value == 'true'){
                divCargas[0].style="display: none"
                op[2].value = 'false';     
        }else if(op[2].value === undefined || op[2].value == 'false')
        {
                divCargas[0].style=" box-shadow: inset;justify-content: center;flex-wrap: wrap;display: inline-flex;height: 50px;display: inline-flex;position: absolute;";
                divCargas[0].innerHTML = txtCargas + '</div>';
                op[2].value = 'true';  
        } 
     }
     else if(guia == 'gerenciamento'){
        limparGuias();
        if(op[1].value == 'true'){
                divCadastros[0].style="display: none"
                op[1].value = 'false';     
        }else if(op[1].value === undefined || op[1].value == 'false')
        {
                divCadastros[0].style=" box-shadow: inset;justify-content: center;flex-wrap: wrap;display: inline-flex;height: 50px;display: inline-flex;position: absolute;";
                divCadastros[0].innerHTML = txtCadastros + '</div>';
                op[1].value = 'true';  
        } 
     }
       
}

window.addEventListener("load", function services(){
let card = document.getElementsByClassName('Services');
let page =["img","title","subtitle","href"];
let title =["PAINÉIS QLIKSENSE"];
let title2 =["PAINÉIS QLIKSENSE"];
let title3 =["PAINÉIS QLIKSENSE"];
let subtitle = ["RESUMO SOBRE OS PAINEIS/PROJETO"];
let subtitle2 = ["RESUMO SOBRE OS PAINEIS/PROJETO"];
let subtitle3 = ["RESUMO SOBRE OS PAINEIS/PROJETO"];
let i = ["MAIS SOBRE"];
let i2 = ["MAIS SOBRE"];
let i3 = ["MAIS SOBRE"];
let htmlContent =''
for(let x =1;x<=3;x++){
        
htmlContent += container('display-in Containerservice','service',

        img('../assets/Brasaologopbh.png','cimg','cimg1',card[0])
        +
        container(
                'card-text','card-text',
               p('','card-title',`card-title-${x}`,title,card[0]) 
                +
                p('',subtitle,subtitle,subtitle,card[0])
                +
                inputButton('window.location.href="https://qlik.pbh.gov.br/sense/app/faab3f22-1dbf-42eb-bea2-be71bc65785a/sheet/3d724703-d887-4f20-aad2-c80252dea553/state/analysis"',i,`card-input-${x}`,i,card[0]),card[0]),card[0]
        );
}

return card[0].innerHTML=htmlContent ;




});



function AcessoRapido(){
        console.log('teste');

        let quickAccess = document.getElementById('quickAccess');
        let Pages = ['Apagar Carga','Carregar Custos com Agua','Carregar Custos com Energia','Custo com Suprimentos','Carga SUCC','Carga SOF','Unidades','Endere�os','Centros Custo','C�digo de Lota��o']
        let htmlContent = '';
        Pages.forEach(p=>{
            htmlContent  += `<div class="item"><a href='#'>${p}</a></div>`;
        })
        quickAccess.innerHTML=htmlContent;
        
}



const limparGuias =() =>{
        let divGeral = document.getElementsByClassName('divGeral');
        let divCadastros = document.getElementsByClassName('divCadastros');
        let divCargas = document.getElementsByClassName('divCargas');
        let divGerenciamento = document.getElementsByClassName('divGerenciamento');
     
        divGeral[0].style="display: none";
        divCargas[0].style="display:none";
        divCadastros[0].style="display:none";
        divGerenciamento[0].style="display:none";

    
    }


const navOutHover =() =>{
    let op = document.getElementsByClassName('divvalue');
    op[0].style="display: none"


}


const navOnHover =() =>{
let op = document.getElementsByClassName('divGeral');

op[0].style=" justify-content: center;flex-wrap: wrap;background-color:white;display: inline-flex;height: 50px;width: 1800px;display: inline-flex;animation: opAnimated 1s linear forwards;position: absolute;transition: all 1.5s ease;"  


}



function navFunction(nav){
let container = document.getElementById('container-main');
if(document.documentElement.scrollTop >= 238 ){
        nav.setAttribute("class","Onsticky");
        limparGuias();
       
        container.setAttribute("class","display-in ContainerSticky");

}else if(document.documentElement.scrollTop < 238){
        nav.removeAttribute('class');
        nav.setAttribute("class","Ofsticky");
        container.setAttribute("class","display-in container-main");
        limparGuias();
       
     

      
        

}
    
}

window.AcessoRapido = AcessoRapido();
window.OnclikNav = OnclikNav;
window.navFunction = navFunction;