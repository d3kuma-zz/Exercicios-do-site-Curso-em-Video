let valores = [8, 1, 4, 7 , 2, 9]

// Usar for para varrer todos os valores do vetor
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}

// Jeito simplificado
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`);
}

// Busca da posição de um valor no meu vetor
console.log(valores.indexOf(8))

// Utilizar if para saber a posição do valor
let pos = valores.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encontrado.');
}else{
    console.log(`O valor está na posição ${pos}`);
}