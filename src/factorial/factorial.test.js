import getFactorial from './factorial';
import { typeErrorMessage, rangeErrorMessage } from './utils.js';
/*
  TEST = Método do JEST para executar os testes for escrito.
  O primeiro argumento é a descrição do TESTES.
  O segundo argumento é uma função de CALLBACK que vai encapsular o código do
  teste que escrevermos.
*/
test('getFactorial should be a function', ()=>{
  /* 
    EXPECT = Método do JEST que vai checar se o valor que ele recebe como
    argumento, da MATCH com alguma condição que escrevermos.
  */
  expect(getFactorial).toBeInstanceOf(Function)
})

/*
   DESCRIBE = Método do JEST para agrupar testes relacionados entre si.
   Parâmetro 1 = Descrição com o nome do grupo.
   Parâmetro 2 = Função que agrupa os testes e cria um escopo específico
   para eles.
*/
describe('Happy Path', () => {

  test('getFactorial(3) should return 6', () => {
    const actual = getFactorial(3);
    const expected = 6;
    expect(actual).toBe(expected);
  })
  
  test('getFactorial(4) should return 24', () => {
    const actual = getFactorial(4);
    const expected = 24;
    expect(actual).toBe(expected);
  })

})

describe('Unhappy Path', () => {
  test('getFactorial() without argument, should throw a TypeError', () => {
    try {
      getFactorial()
    } catch (error) {
      expect(error.name).toBe('TypeError')
    }
  })

  test(`getFactorial() without argument, should throw a TypeError with message ${typeErrorMessage}`, () => {
    try {
      getFactorial()
    } catch (error) {
      expect(error.message).toBe(typeErrorMessage)
    }
  })

  test(`getFactorial(0), should return 1`, () => {
    const actual = getFactorial(0);
    const expected = 1;
    expect(actual).toBe(expected);
  })

  test(`getFactorial(-1), should throw a RangeError`, () => {
    let error;
    try {
      getFactorial(-1)
    } catch (err) {
      error = err;
    }
    expect(error.name).toBe('RangeError')
  }) 

  test(`getFactorial(-1), should throw a RangeError with message ${rangeErrorMessage}`, () => {
    try {
      getFactorial(-1)
    } catch (error) {
      expect(error.message).toBe(rangeErrorMessage)
    }
  })  
})