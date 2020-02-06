const usuariosModels = require('../models/usuarios');
const usuarios =  {

    list () {
        return new Promise((resolve, reject) => {
            usuariosModels.find((error, lista) => {

                if(error) reject(error);
                resolve(lista)
            })
        })
    }
}

module.exports = usuarios