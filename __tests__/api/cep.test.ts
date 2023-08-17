import { getDataByCep } from '../../src/api/cep'

describe('Cep API', () => {
  it('should return a valid address', async () => {
    const cep = '01001000'
    const response = await getDataByCep(cep)

    expect(response).toEqual({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107'
    })
  })

  it('should return an error', async () => {
    const cep = '00000000'
    const response = await getDataByCep(cep)

    expect(response).toEqual({
      erro: true
    })
  })

  it('should return an error', async () => {
    const cep = '12345678'
    const response = await getDataByCep(cep)

    expect(response).toEqual({
      erro: true
    })
  })
})
