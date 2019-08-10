
const argv = require('./yargs').argv;
const { crear , actualizar, getList, deleted } = require('./do/todo');
const colors = require('colors');
let comando = argv._[0];

switch ( comando ) {
    case 'lista':
      let lista = getList();
      console.log('lista de tareas'.green);
        for (const list of lista) {
            console.log('-------------------------------------------'.green); 
            console.log( colors.cyan( 'Tarea: ' ) , colors.white( list.des))
            console.log(colors.cyan( 'Completado: ' ) ,colors.yellow( list.completado))}    
        break;
    case 'crear':
        let action = crear(argv.descripcion);
        console.log('action: ', action);
        break;
    case 'borrar':
        let action1 = deleted(argv.descripcion);
        console.log('action: ', action1);
        break;
    case 'actualizar':
            let action2 = actualizar(argv.descripcion);
            console.log('actualizado la tarea: '  ,argv.descripcion );
        break;
    default:
            console.log('no reconocido');
        break;
}