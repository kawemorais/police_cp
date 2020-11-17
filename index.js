let config = {
    furto: {
        tempo: 12,
        multa: 4000,
        fianca: 5000
    },
    roubo: {
        tempo: 14,
        multa: 4000,
        fianca: 7000
    },
    rBanco: {
        tempo: 39,
        multa: 15000,
        fianca: 999999
    },
    rCaixa: {
        tempo: 16,
        multa: 5000,
        fianca: 7000
    },
    rLoja: {
        tempo: 24,
        multa: 6500,
        fianca: 8500
    },
    rRegis: {
        tempo: 12,
        multa: 4000,
        fianca: 7000
    },
    rveh:{
        tempo: 19,
        multa: 4000,
        fianca: 7000
    },
    desmanche: {
        tempo: 18,
        multa: 6000,
        fianca: 12000
    },
    receptação: {
        tempo: 14,
        multa: 0,
        fianca: 10000
    },
    agressao: {
        tempo: 10,
        multa: 1000,
        fianca: 4000
    },
    difamacao: {
        tempo: 0,
        multa: 2000,
        fianca: 999999
    },
    calunia: {
        tempo: 0,
        multa: 2000,
        fianca: 999999
    },
    hCulposo: {
        tempo: 15,
        multa: 8000,
        fianca: 9000
    },
    hDoloso: {
        tempo: 28,
        multa: 14000,
        fianca: 15000
    },
    seqCivil: {
        tempo: 34,
        multa: 10000,
        fianca: 999999
    },
    seqOficial: {
        tempo: 42,
        multa: 13000,
        fianca: 999999
    },
    assCriminosa: {
        tempo: 22,
        multa: 0,
        fianca: 20000
    },
    desobediencia: {
        tempo: 12,
        multa: 0,
        fianca: 5000
    },
    desacato: {
        tempo: 14,
        multa: 3000,
        fianca: 7500
    },
    falsIdeo: {
        tempo: 14,
        multa: 3000,
        fianca: 999999
    },
    tentativaSuborno: {
        tempo: 15,
        multa: 0,
        fianca: 999999
    },
    fuga: {
        tempo: 10,
        multa: 4000,
        fianca: 7500
    },
    obsDJus: {
        tempo: 14,
        multa: 0,
        fianca: 5000
    },
    denFalsa: {
        tempo: 10,
        multa: 4000,
        fianca: 8000
    },
    corrida: {
        tempo: 0,
        multa: 6500,
        fianca: 5000
    },
    vidroFume: {
        tempo: 0,
        multa: 2000,
        fianca: 5000
    },
    conduPer: {
        tempo: 0,
        multa: 4000,
        fianca: 5000
    },
    hSpeed: {
        tempo: 0,
        multa: 4000,
        fianca: 5000
    },
    explosivos: {
        tempo: 30,
        multa: 10000,
        fianca: 20500
    },
    piaB: {
        tempo: 16,
        multa: 0,
        fianca: 999999
    },
    piaA: {
        tempo: 26,
        multa: 0,
        fianca: 999999
    },
    traficoA: { // 10.000/un
        tempo: 24,
        multa: 10000,
        fianca: 999999
    },
    traficoD: { // 1.000/un
        tempo: 12,
        multa: 1000,
        fianca: 999999
    },
    posseOb: { // 400/10un
        tempo: 12,
        multa: 400,
        fianca: 25000
    },
    posseSub: { // 400/10un
        tempo: 7,
        multa: 400,
        fianca: 999999
    },
    reuPri: {
        tempo: 0,
        multa: 0,
        fianca: 0
    }
}

$(document).ready(function () {
    $(".pResPena").hide();
    $(".pResMulta").hide();
    $(".pResFianca").hide();
});

var soma = 0
var multas = 0
var fiancas = 0

$(".btnCalcPena").click(function(){
    var selecs = $('input:checked');

    var ids = selecs.map(function(){
    return this.id;
    }).get();

    for (let j = 0; j < ids.length; j++) {
        const element = ids[j];
        
        soma = soma + config[element].tempo 
        multas = multas + config[element].multa
        fiancas = fiancas + config[element].fianca
        if(element == "reuPri"){
            soma = soma / 2
        }
        if (fiancas >= 200000) {
            fiancas = 0
        }

        document.querySelector(".pResPena").innerHTML = soma + " anos"
        document.querySelector(".pResMulta").innerHTML = "R$" + multas
        document.querySelector(".pResFianca").innerHTML = "R$" + fiancas

        $(".pResPena").show();
        $(".pResMulta").show();
        $(".pResFianca").show(); 
    }
    soma = 0
    multas = 0
    fiancas = 0
})



