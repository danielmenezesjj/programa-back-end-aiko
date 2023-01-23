const bodyParser = require("body-parser")
const posicaoVeiculoRoute = require('./posicaoVeiculoRoute.js')
const veiculos = require('./veiculoRoute')

module.exports = (app)=>{
    app.use(bodyParser.json());
    app.use(posicaoVeiculoRoute);
    app.use(veiculos)
}