let amigov = []
console.log(`Meu vetor amigovet utilizando [] é do tipo ${typeof amigov}`)
// Para o JS, considera objetos tanto para arrays [] quanto para objetos {}

let amigod = {
nome: 'Jose',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou');
    this.peso+= p
}}

amigod.engordar(2)
console.log(`${amigod.nome} pesa ${amigod.peso}`);