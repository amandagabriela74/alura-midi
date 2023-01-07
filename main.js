function tocaSom (idElementoAudio){
   elemento = document.querySelector(idElementoAudio)

    if (elemento ===null){
        alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
    elemento.play();
}

//document.querySelector('.tecla_pom').onclick=tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador=0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if (evento.code ==='Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
}
