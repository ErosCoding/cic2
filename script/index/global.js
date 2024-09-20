
const img = (link= '',c='',id='',document) => {
    return document.innerHTML=`<img title='${id}' src='${link}' class='${c}' id='${id}''></img>`
}
const a =(link= '',c='',id='',text='',document)=>{
    return document.innerHTML=`<a title='${id}' href='${link}'  class='${c}' id='${id}''>${text}</a>`
}

const p =(link= '',c='',id='',text='',document)=>{
    return document.innerHTML=`<p title='${id}' href='${link}'  class='${c}' id='${id}''>${text}</p>`
}

const inputButton =(func= '',c='',id='',value='',document)=>{
    return document.innerHTML=`<input title='${id}' value='${value}' onclick='${func}' class='${c}' id='${id}''/>`
}


const container =(c='',id='',e,document)=>{
    return document.innerHTML=`<div title='${id}' class='container ${c}' id='${id}''>${e}</div>`
}

   //img('../assets/Brasaologopbh.png','cimg','cimg1',container) ;

window.container = container;
window.img = img;
window.a = a;
window.inputButton  = inputButton;
window.p= p;
