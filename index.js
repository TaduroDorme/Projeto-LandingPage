var SetaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var Samanta = window.document.getElementById("samanta")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style ="display:none"
    Samanta.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    Leonardo.style ="display:flex"
    Samanta.style ="display.none"
    SetaDireita.style ="display.flex"
    SetaEsquerda.style ="display:none"
}