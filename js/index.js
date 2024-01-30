let Leonardo = window.document.getElementById("Leonardo")
let Samantha = window.document.getElementById("Samantha")
let Bruna = window.document.getElementById("Bruna")
let setaDireita = window.document.getElementById("seta-direita")
let setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}