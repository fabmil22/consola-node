const  fs  = require('fs');

let listartareas = [];

const saveDB =  ()  =>{
  fs.writeFile ('db/data.json', JSON.stringify(listartareas), function (err) {
    if (err) throw err;
    console.log('guardado');
  });

}


const cargar  = () =>{
    try {
        listartareas = require('../db/data.json');
    } catch (error) {
        listartareas = [];
        
    }
   

}

const crear = (des)=>{
    cargar();
    let hacer = {
        des,
        completado:false
    }
    listartareas.push(hacer);
    saveDB();
    
    return hacer;
}


const getList = () =>{

     let list = require('../db/data.json');
     return list;


}

const actualizar = (desc) =>{
    cargar();
    
  let  index =  listartareas.findIndex( function(element){
     
        return element.des === desc;
     })

if( index >= 0){
    listartareas[index].completado  = true;
}
saveDB();


}
         
const deleted = (desc) => {
    cargar();
    let  index =  listartareas.findIndex( function(element){
     
        return element.des === desc;
     })

     if( index >= 0){
         console.log('index : ', index );

        listartareas.splice(index, 1);
    }

    saveDB();
}

module.exports = { crear , actualizar, getList , deleted }