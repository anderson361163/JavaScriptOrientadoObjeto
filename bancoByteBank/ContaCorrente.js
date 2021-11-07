
import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    /*
    Não existe atributos privados no javascript
    desde a versão a node.js v12, porém existe 
    uma proposta de 2014 para alterar a conveção
    do javascript de atua
    https://github.com/tc39/proposal-class-fields#private-fields 
    */
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;
    

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas +=1;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }





    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        /*if(valor > 0){
            this._saldo += valor;
            console.log("ContaCorrente >> Saldo atual: " + this._saldo)
        }*/
        if(valor <=0){
            return;
        }
        this._saldo += valor;
    }

    transferencia(valor, conta){


        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}