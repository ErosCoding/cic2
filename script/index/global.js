
const img = (link= '',Class='',id='',document) => {
    return document.innerHTML=`<img title='${id}' src='${link}' class='${Class}' id='${id}''></img>`
}
const a =(link= '',Class='',id='',text='',document)=>{
    return document.innerHTML=`<a title='${id}' href='${link}'  class='${Class}' id='${id}''>${text}</a>`
}

const p =(link= '',Class='',id='',text='',document)=>{
    return document.innerHTML=`<p title='${id}' href='${link}'  class='${Class}' id='${id}''>${text}</p>`
}

const inputButton =(Function= '',Class='',id='',value='',document)=>{
    return document.innerHTML=`<input type="button" title='${id}' value='${value}'onclick='${Function}' class='${Class}' id='${id}''/>`
}

const div = (text,Class='',id='',w='',h='',document) => {
    if(document == ''){
        return `<div  style='width:${w};height:${h};' class='${Class}' id='${id}''>${text}</div>`;
    }else{
    return document.innerHTML=`<div  style='width:${w};height:${h};' class='${Class}' id='${id}''>${text}</div>`
    }
}

//<div id="${page}" class='opgeral'>${page}</div>

const container =(Class='',id='',component,document)=>{
    return document.innerHTML=`<div title='${id}' class='container ${Class}' id='${id}''>${component}</div>`
}

   //img('../assets/Brasaologopbh.png','cimg','cimg1',container) ;

window.container = container;
window.img = img;
window.a = a;
window.inputButton  = inputButton;
window.p= p;
window.div=div;
