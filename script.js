const nome = document.querySelector("#nome");
const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");
const cidadeElememto = document.querySelector("#cidade");


botaoSair.addEventListener("click", function() {
    alert("Botão clicado!");
});
botaoEditar.addEventListener("click", function() {
    const novoNome = prompt("Digite seu nome:");
    if (novoNome !== null && novoNome.trim() !== ""){
        nome.textContent = novoNome.trim();

    const novaCidade = prompt("Digite sua Cidade:");
    if(novaCidade !== null && novaCidade.trim());
            cidadeElememto.textContent = novaCidade.trim();
    }
});
botaoSair.addEventListener("click", function() {
    const primeiraConfirmacao = confirm("Deseja sair do perfil?");
    if (primeiraConfirmacao){
    const segundaConfirmacao = confirm("Deseja mesmo sair do perfil?");
    if (segundaConfirmacao) {
        alert("Você saiu do perfil"); 
    } else {
        alert("Ação de saída cancelada."); 
     }
    }
});
