const platosModels = require('../models/platos');
const platos =  {

    list () {
        return new Promise((resolve, reject) => {
            platosModels.find((error, lista) => {

                if(error) reject(error);
                resolve(lista)
            })
        })
    }
}

module.exports = platos