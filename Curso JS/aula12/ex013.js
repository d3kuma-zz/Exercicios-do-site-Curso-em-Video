// Comando que pega o dia da semana do sistema
var agora = new Date()
var diaSem = agora.getDay()
switch (diaSem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sábado');
        break;
    default:
        console.log('ERRO! Dia inválido');
}
console.log();