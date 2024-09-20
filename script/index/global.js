
const img = (link= '',c='',id='',document) => {
    return document.innerHTML=`<img title='${id}' src='${link}' class='${c}' id='${id}''></img>`
}
const a =(link= '',c='',id='',document)=>{
    return document.innerHTML=`<a title='${id}' href='${link}'  class='${c}' id='${id}''></a>`
}