var expect = require("chai").expect;

// import {somaDoisNumeros} from "../estrutura_sequencial.js"

estrutura_sequencial = require("../estrutura_sequencial")
somaDoisNumeros = estrutura_sequencial.somaDoisNumeros
multiplicaTrêsNúmeros = estrutura_sequencial.multiplicaTrêsNúmeros

describe("Módulo 01 - Estrutura Sequencial", function() {
    describe("Exercício 01 - Soma dois números", function() {
        it("2 + 1 = 3", function() {
            var soma = somaDoisNumeros(2,1)
            expect(soma).to.equal(3)
        })
        it("1 - 1 = 0", function(){
            let soma = somaDoisNumeros(1,-1)
            expect(soma).to.equal(0)
        })
    })
    describe("Exercício 02 - Multiplica três números", function(){
        it("1 * 1 * 1 = 1", function(){
            let multiplicação = multiplicaTrêsNúmeros(1,1,1)
            expect(multiplicação).to.equal(1)
        })
    })
})