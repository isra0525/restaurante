const categoriasModels = require('../models/categorias');
const categorias =  {

    list () {
        return new Promise((resolve, reject) => {
            categoriasModels.find((error, lista) => {

                if(error) reject(error);
                resolve(lista)
            })
        })
    }
}

module.exports = categorias