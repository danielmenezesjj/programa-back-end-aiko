
const {ParadaServices} = require('../services')
const ServicesParada = new ParadaServices()

describe('Testando os Serviços de Paradas', ()=>{
    const objetoParada = {
        name: "testeUnitario",
        latitude: 30.00,
        longitude: 30.00
    }

    it('Deve criar uma parada e verifica se realmente foi salva no BD', async ()=>{
        const createParada = await ServicesParada.criaRegistro(objetoParada)
        const retornado = await  ServicesParada.pegaUmRegistro(createParada.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                createdAt: expect.any(Date),
                updatedAt: expect.any(Date),
                latitude: expect.any(Number),
                longitude: expect.any(Number)
            })
        )
    });



})