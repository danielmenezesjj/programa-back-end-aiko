const app = require('../../index')
const request = require('supertest');
const { sequelize } = require('../../models');





let idResposta;
describe('POST em /paradas' , ()=>{
    it('Deve adicionar uma nova parada', async ()=>{
     const resposta = await request(app)
            .post('/paradas')
            .send({
                name: "testeIntegração",
                latitude: 30.00,
                longitude: 30.00
            })
            .expect(201)      
});

it('Deve não adicionar nada ao passar o body vazio', async ()=>{
    await request(app)
    .post('/paradas')
    .send({})
    .expect(400)
}); 
});

describe('GET em /paradas', () =>{
    it('Deve retornar uma lista de paradas', async ()=>{
      const resposta =  await request(app)
        .get('/paradas')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
    expect(resposta.body[0].name).toEqual('testeUnitario')
    idResposta = resposta.body[0].id
    });
})

describe('GET em /paradas/id', ()=>{
    it('Deve retornar somente uma rota ', async ()=>{
        await request(app)
        .get(`/paradas/${idResposta}`)
        .expect(200)
    })
})

describe('PUT em /paradas/id', ()=>{
    it.each([
        ['nome', {name: 'paradaTesteAtt'}],
        ['latitude', {latitude: 30.560}],
        ['longitude', {longitude: 40.504}],
    ])('Deve alterar o campo %s', async (chave, param)=>{
        request(app)
        .put(`/paradas/${idResposta}`)
        .send(param)
        .expect(204)
    })

})

let idDelete
describe('DELETE EM /paradas/id', ()=>{

    it('Deve adicionar uma parada pra ser deletada', async ()=>{
      const resposta = await request(app)
       .post('/paradas')
       .send({
        name: "vaiserdeletado",
        latitude: 30.00,
        longitude: 30.00
       })
        .expect(201)
        idDelete = resposta.body.id
    })
    
    it('Deve deletar a parada que foi feita pra delete', async ()=>{
        await request(app)
        .delete(`/paradas/${idDelete}`)
        .expect(200)
    })
})
