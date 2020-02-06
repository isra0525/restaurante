const clientesModels = require('../models/clientes');
const clientes =  {

    list () {
        return new Promise((resolve, reject) => {
            clientesModels.find((error, lista) => {

                if(error) reject(error);
                resolve(lista)
            })
        })
    }
}

module.exports = clientes