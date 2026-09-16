
const botao = document.querySelector ("#botaoMensagem");
const mensagem=document.querySelector("#mensagemInterativa");
botao.addEventlistener("click",mostrarMensagem);
function mostrarMensagem(){
    mensagem.textContent=
    "voce acabou de criar uma interaçao  com JavaScript";
}