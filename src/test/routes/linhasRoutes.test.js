const app = require('../../index')
const request = require('supertest');
const { sequelize } = require('../../models');


let idResposta;
describe('POST em /linhas', ()=>{
    it('Deve registrar uma linha nova', async ()=>{
      const resposta =  await request(app)
        .post('/linhas')
        .send({
            name: 'testeLinha',
            Parada_id: 211
        })
        .expect(201)
        idResposta = resposta.body.id
    });
    it('Deve não adicionar nada ao passar o body vazio', async ()=>{
        await request(app)
        .post('/linhas')
        .send({})
        .expect(400)
    })
});

describe('GET em /linhas', () =>{
    it('Deve retornar uma lista de linhas', async ()=>{
      const resposta =  await request(app)
        .get('/linhas')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
    expect(resposta.body[0].name).toEqual('testeLinha')
    idResposta = resposta.body[0].id
    });
})

describe('GET em /linhas/id', ()=>{
    it('Deve retornar somente uma linha', async ()=>{
       const resposta = await request(app)
        .get(`/linhas/${idResposta}`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
    expect(resposta.body.name).toEqual('testeLinha')
    })
})

describe('PUT em /linhas/id', ()=>{
    it.each([
        ['name', {name: 'testeLinhaAtualizado'}],
        ['Parada_id', {Parada_id: 212}]
    ])('Deve alterar o campo %s', async(chave, param)=>{
        request(app)
        .put(`/linhas/${idResposta}`)
        .send(param)
        .expect(204)
    })
})
let idDeletado;
describe('DELETE em /linhas/id', ()=>{
    it('Deve criar linha pra ser deletada', async ()=>{
        const reposta = await request(app)
        .post('/linhas')
        .send({
            name: 'linhaPraSerDeletada',
            Parada_id: 211
        })
        .expect(201)
        idDeletado = reposta.body.id
    })
    it('Deve deletar a linha que foi criada pra delete', async ()=>{
        await request(app)
        .delete(`/linhas/${idDeletado}`)
        .expect(200)
    })
})