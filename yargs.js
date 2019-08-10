const argv = require('yargs')
             .command('crear', 'crea una tarea',{
                 descripcion:{
                     demand: true,
                     alias:'d',
                     desc: 'descripcion de la tarea por hacer'
                 } 
             })
             .command('actualizar' , 'actualiza una tarea',{
                 descripcion : {
                    alias:'d',
                     desc: 'descripcion de la tarea por actualizar' 
                 },
                 completado:{
                     default: true,
                     complet:'c',
                     desc: 'marca como compltado la tarea' 
                 }},
             ) .command('borrar' , 'actualiza una tarea',{
                descripcion : {
                   alias:'d',
                    desc: 'tarea a eliminar' 
                }},
            ).help().argv;


             module.exports = { argv}