const botaoMensagem = document.querySelector("#botaoMensagem");
const mensagem = document.querySelector("#mensagem");

botaoMensagem.addEventListener("click", () => {
  mensagem.classList.toggle("show");
  if (mensagem.classList.contains("show")) {
    botaoMensagem.textContent = "Clique para esconder a mensagem!";
  } else {
    botaoMensagem.textContent = "Clique para ver uma mensagem!";
  }
});
