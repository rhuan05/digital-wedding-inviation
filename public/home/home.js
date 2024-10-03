var dataCasamento = new Date('2024-09-30');
var dataAtual = new Date();
var diferenca = dataCasamento - dataAtual;
var diasFaltando = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
var segundos = 59;
var minutos = 59;
var horas = 23;

var dias__item = document.querySelector('#days');
var horas__item = document.querySelector('#hours');
var minutos__item = document.querySelector('#minutes');
var segundos__item = document.querySelector('#seconds');

dias__item.innerHTML = diasFaltando;

setInterval(() => {
    if(segundos == 0){
        segundos = 59;

        if(minutos == 0){

            minutos = 59;

            if(horas == 0){

                horas = 23;

                if(diasFaltando == 0){
                    return console.log('Casamento chegou!');
                }

                diasFaltando--;
                dias__item.innerHTML = diasFaltando;
                return;
            }

            horas--;
            horas__item.innerHTML = horas;
            return;
        }

        minutos--;
        minutos__item.innerHTML = minutos;
        return;
    }

    segundos--;
    segundos__item.innerHTML = segundos;
    return;
}, 1000);