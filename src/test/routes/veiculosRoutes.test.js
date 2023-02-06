const app = require('../../index')
const request = require('supertest')


describe('POST em /veiculos', ()=>{
    it('Deve criar um novo veiculo', async ()=>{
        await request(app)
        .post('/veiculos')
        .send({
            name: 'VeiculoTest',
            modelo: 'modeloTest',
            Linha_id: 175
        })
        .expect(201)
    });
    it('Deve não adicionar nada ao passar o body vazio', async ()=>{
        await request(app)
        .post('/veiculos')
        .send({})
        .expect(400)
    });
});

let idResposta;
describe('GET em /veiculos', ()=>{
    it('Deve retornar todos os veiculos', async ()=>{
       const resposta = await request(app)
        .get('/veiculos')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
    expect(resposta.body[0].name).toEqual('VeiculoTest')
   idResposta = resposta.body[0].id
    });
});

describe('GET em /veiculos/id', ()=>{
    it('Deve retornar somente um veiculo', async ()=>{
        const resposta = await request(app)
        .get(`/veiculos/${idResposta}`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
    expect(resposta.body.name).toEqual('VeiculoTest')
    });
});

describe('PUT em /veiculos/id', ()=>{
    it.each([
        ['name', {name: 'VeiculoTest'}],
        ['modelo', {modelo: 'testeAtualizandoModelo'}],
        ['Linha_id', {Linha_id: 175}]
    ])('Deve alterar o campo %s', async (chave, param)=>{
        await request(app)
        .put(`/veiculos/${idResposta}`)
        .send(param)
        .expect(204)
    });
    
});

let idDeletado;
describe('DELETE em /veiculos/id', ()=>{
    it('Deve criar um veiculo pra ser deletado', async ()=>{
       const resposta = await request(app)
        .post('/veiculos')
        .send({
            name: 'VeiculoDelete',
            modelo: 'modeloDelete',
            Linha_id: 175
        });
        idDeletado = resposta.body.id
    });

    it('Deve deletar o veiculo que foi criado para delete', async ()=>{
        await request(app)
        .delete(`/veiculos/${idDeletado}`)
        .expect(200)
    });
});

describe('RESTAURA em /veiculos/id/restaura', ()=>{
    it('Deve restaurar o veiculo deletado', async ()=>{
        await request(app)
        .post(`/veiculos/${idDeletado}/restaura`)
        .expect(200)
    })
})

