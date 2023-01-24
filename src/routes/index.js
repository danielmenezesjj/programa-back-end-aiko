const bodyParser = require("body-parser")
const posicaoVeiculoRoute = require('./posicaoVeiculoRoute.js')
const veiculos = require('./veiculoRoute')
const linhas = require('./linhaRoute')
const paradas = require('./paradaRoute')

module.exports = (app)=>{
    app.use(bodyParser.json());
    app.use(posicaoVeiculoRoute);
    app.use(veiculos);
    app.use(linhas);
    app.use(paradas)
}