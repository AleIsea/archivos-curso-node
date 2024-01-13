// 2- Exportar Varios elementos


function saludar(nombre){   
    return 'este es el mudulo saludar';
}

function HolaMundo(){
    return 'este es el modulo HolaMundo'
}


// Exportar un modulo - Curso de Node.js
module.exports.saludar = saludar;   
module.exports.holaMundo = HolaMundo;