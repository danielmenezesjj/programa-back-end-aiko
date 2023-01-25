const bodyParser = require("body-parser")
const paradas = require('./paradaRoute')
const linhas = require('./linhaRoute')
const veiculos = require('./veiculoRoute')
const posicaoVeiculos = require('./posicaoVeiculoRoute')


module.exports = (app)=>{
    app.use(bodyParser.json());
    app.use(paradas);
    app.use(linhas);
    app.use(veiculos);
    app.use(posicaoVeiculos)
}