let config = {
    furto: {
        tempo: 12,
        multa: 4000
    },
    roubo: {
        tempo: 14,
        multa: 4000
    },
    rBanco: {
        tempo: 39,
        multa: 15000
    },
    rCaixa: {
        tempo: 16,
        multa: 5000
    },
    rLoja: {
        tempo: 24,
        multa: 6500
    },
    rRegis: {
        tempo: 12,
        multa: 4000
    },
    rveh:{
        tempo: 19,
        multa: 4000
    },
    desmanche: {
        tempo: 18,
        multa: 6000
    },
    receptação: {
        tempo: 14,
        multa: 0
    },
    agressao: {
        tempo: 10,
        multa: 1000
    },
    difamacao: {
        tempo: 0,
        multa: 2000
    },
    calunia: {
        tempo: 0,
        multa: 2000
    },
    hCulposo: {
        tempo: 15,
        multa: 8000
    },
    hDoloso: {
        seqCivil: 28,
        multa: 14000
    },
    seqCivil: {
        tempo: 34,
        multa: 10000
    },
    seqOficial: {
        tempo: 42,
        multa: 13000
    },
    assCriminosa: {
        tempo: 22,
        multa: 0
    },
    desobediencia: {
        tempo: 12,
        multa: 0
    },
    desacato: {
        tempo: 14,
        multa: 3000
    },
    falsIdeo: {
        tempo: 14,
        multa: 3000
    },
    tentativaSuborno: {
        tempo: 15,
        multa: 0
    },
    fuga: {
        tempo: 10,
        multa: 4000
    },
    obsDJus: {
        tempo: 14,
        multa: 0
    },
    denFalsa: {
        tempo: 10,
        multa: 4000
    },
    corrida: {
        tempo: 0,
        multa: 6500
    },
    vidroFume: {
        tempo: 0,
        multa: 2000
    },
    conduPer: {
        tempo: 0,
        multa: 4000
    },
    hSpeed: {
        tempo: 0,
        multa: 4000
    },
    explosivos: {
        tempo: 30,
        multa: 10000
    },
    piaB: {
        tempo: 16,
        multa: 0
    },
    piaA: {
        tempo: 26,
        multa: 0
    },
    traficoA: {
        tempo: 24,
        multa: 10000
    },
    posseOb: {
        tempo: 12,
        multa: 400
    },
    posseSub: {
        tempo: 7,
        multa: 400
    },
    reuPri: {
        tempo: 0,
        multa: 0
    }
}

$(document).ready(function () {
    $(".pResPena").hide();
    $(".pResMulta").hide();
});

var soma = 0
var multas = 0

$(".btnCalcPena").click(function(){
    var selecs = $('input:checked');

    var ids = selecs.map(function(){
    return this.id;
    }).get();

    for (let j = 0; j < ids.length; j++) {
        const element = ids[j];
        
        soma = soma + config[element].tempo
        multas = multas + config[element].multa
        
        if(element == "reuPri"){
            soma = soma / 2
        }

        document.querySelector(".pResPena").innerHTML = soma + " anos"
        document.querySelector(".pResMulta").innerHTML = "R$" + multas
        $(".pResPena").show();
        $(".pResMulta").show(); 
    }
    soma = 0
    multas = 0
})



