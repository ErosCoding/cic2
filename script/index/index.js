//




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
               txtGeral  +=`<div id="${page}" class='opgeral'>${page}</div>`
        }
        );
        pageCadastros.forEach((page) =>{
                txtCadastros +=`<div id="${page}" class='opgeral'>${page}</div>`
        }
        );
        pageCargas.forEach((page) =>{
                txtCargas +=`<div id="${page}" class='opgeral'>${page}</div>`
        }
        );
        pageGerenciamento.forEach((page) =>{
                txtGerenciamento +=`<div id="${page}" class='opgeral'>${page}</div>`
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

function AcessoRapido(){
        console.log('teste');

        let quickAccess = document.getElementById('quickAccess');
        let Pages = ['Apagar Carga','Carregar Custos com Agua','Carregar Custos com Energia','Custo com Suprimentos','Carga SUCC','Carga SOF','Unidades','Endereços','Centros Custo','Códigos de Lotação']
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
       
        container.setAttribute("class","display-in ContainerSticky");

}else if(document.documentElement.scrollTop < 238){
        nav.removeAttribute('class');
        nav.setAttribute("class","Ofsticky");
        container.setAttribute("class","display-in container-main");
       
      
        

}
    
}
window.AcessoRapido = AcessoRapido();
window.OnclikNav = OnclikNav;
window.navFunction = navFunction;