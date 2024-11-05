const {sequelizeDb, sequelizeConfig} = require('./database')

//CRIANDO DA TABELA
const departamento = sequelizeConfig.define(
    'departmento',
    {
        nome:{type:sequelizeDb.STRING},
        descricao:{type:sequelizeDb.TEXT}
    }
)

departamento.sync()
module.exports = departamento