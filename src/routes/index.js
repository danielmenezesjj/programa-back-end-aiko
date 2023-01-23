const bodyParser = require("body-parser")
const posicaoVeiculoRoute = require('./posicaoVeiculoRoute.js')


module.exports = (app)=>{
    app.use(bodyParser.json());
    app.use(posicaoVeiculoRoute)
}