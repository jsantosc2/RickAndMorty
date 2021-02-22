var url="https://rickandmortyapi.com/api/character";

let info
async function empezar(){
    let response = await fetch(url);
    let data = await response.json();
    info=data
  //  console.log(data)
  //  document.getElementById("prev").style.visibility="hidden"
    functionMostar(data)

}


  
async function mostrarInfoNext(){
   
    if(info.info.next===null){
        document.getElementById("next").style.visibility="hidden"
        
    }else{
        document.getElementById("next").style.visibility="visible"
        document.getElementById("prev").style.visibility="visible"

        url=info.info.next
        let response = await fetch(url);
        let data = await response.json();
        info=data
        functionMostar(data)
   
    }



}
async function mostrarInfoPrev(){
    
    if(info.info.prev===null){
        document.getElementById("prev").style.visibility="hidden"
    }else{
        document.getElementById("prev").style.visibility="visible"
        document.getElementById("next").style.visibility="visible"
        url=info.info.prev
        let response = await fetch(url);
        let data = await response.json();
        info=data
                functionMostar(data)
    }
  
    
       

    



}


async function  functionMostar(data){
    var html=""
    for(let i=0;i<data.results.length;i++){
        html+="<div class='personaje'>"
        html+="<img class ='imagen' src='"+data.results[i].image+"'/>"
        html+="<div class ='name' >"+data.results[i].name+"</div>"
       
        html+="</div>"
    }
    document.getElementById("info").innerHTML=html

}
var url2="https://rickandmortyapi.com/api/character";


async function buscar(){

    var html="", g=false
    while(url2!==null){
        let response = await fetch(url2);
        let data = await response.json();
        for(let i=0;i<data.results.length;i++){
            var nombre=document.getElementById("busqueda").value
            if(data.results[i].name===nombre){

              

                html+="<div class='personaje'>"
                html+="<img class ='imagen' src='"+data.results[i].image+"'/>"
                html+="<div class ='name' >"+data.results[i].name+"</div>"
               
                html+="</div>"
                document.getElementById("info").innerHTML=html
                g=true
            }
        }
        console.log(data.info)
        if(g===true){
            url2=null
        }else{
            url2=data.info.next
        }
           

    }
      
 url2="https://rickandmortyapi.com/api/character";
 
    

    

 }