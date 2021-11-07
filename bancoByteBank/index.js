//O JS orienta a colocar o caminho absoluto
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//para converter de script para modulo tem criar digitar npm init

const cliente1 = new Cliente("Ricardo", 11122233309);
/*
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
*/

const cliente2 = new Cliente("Alice", 12345678901);
/*cliente2.nome = "Alice";
cliente2.cpf = 12345678901;*/

//Criando conta corrente
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
//contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.depositar(500);
/*
//Operações de Getter e Setters
contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
*/

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteRicardo.transferencia(200, conta2);
//console.log(valorSacado);
//console.log(contaCorrenteRicardo);

console.log('------------------');
console.log(contaCorrenteRicardo);
console.log('------------------');
console.log(cliente2);
console.log('------------------');
console.log('Número de contas no banco: '+ContaCorrente.numeroDeContas);
console.log('------------------');






