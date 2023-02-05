const request = require('supertest')
const app = require('../../index')



describe('POST em /posicaoVeiculos', ()=>{
    it('Deve criar uma nova posicao do Veiculo', async ()=>{
        await request(app)
        .post('/posicaoVeiculos')
        .send({
            latitude: 15.000,
            longitude: 20.000,
            Veiculo_id: 52
        })
    })
})

let idResposta;
describe('GET em /posicaoVeiculos', ()=>{
    it('Deve retornar todos os registros', async ()=>{
        const resposta = await request(app)
        .get('/posicaoVeiculos')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
        idResposta = resposta.body[0].id;
    })
})

describe('GET id em /posicaoVeiculos/id', ()=>{
    it('Deve retornar um registro', async ()=>{
       const resp = await request(app)
        .get(`/posicaoVeiculos/${idResposta}`)
        .expect(200)
    })
})

describe('PUT em /posicaoVeiculos/id', ()=>{
    it.each([
        ['latitude', {latitude: 25.00}],
        ['longitude', {longitude: 30.00}]
    ])('Deve alterar os campos %s', async (chave, param)=>{
        request(app)
        .put(`/posicaoVeiculos/${idResposta}`)
        .send(param)
        .expect
    })
})

let idDelete;
describe('DELETE em /posicaoVeiculo/id', ()=>{
    it('Deve criar uma Posicao para ser deletada', async ()=>{
    const resposta = await request(app)
    .post('/posicaoVeiculos')
    .send({
        latitude: 1000.000,
        longitude: 100.000,
        Veiculo_id: 52
    })
    .expect(201)
    idDelete = resposta.body.id
    })
    it('Deve deletar o registro que foi criado pra ser deletado', async ()=>{
        await request(app)
        .delete(`/posicaoVeiculos/${idDelete}`)
        .expect(200)
    })
})