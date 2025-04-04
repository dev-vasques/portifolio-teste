window.addEventListener("load", function () {
    document.querySelector(".personal-photo img").classList.add("show");
});




function escreverTexto(elementoID, texto, velocidade) {
    let elemento = document.getElementById(elementoID);
    let index = 0;

    
    elemento.innerHTML = "";

    function escrever() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escrever, velocidade);
        }
    }
    escrever();
}

window.addEventListener("load", function () {
    escreverTexto("texto2", "Olá, bem-vindo ao meu Portifólio!", 75);
    escreverTexto("texto1", "Meu nome é Pedro Henrique!", 75);
});

function verificarScroll() {
    const elementos = document.querySelectorAll(".ferramentas-icone i.escondido");

    elementos.forEach((el) => {
        let posicao = el.getBoundingClientRect().top;
        let alturaTela = window.innerHeight;

        if (posicao < alturaTela - 200) {
            el.classList.add("visivel");
        }
    });
}

window.addEventListener("scroll", verificarScroll);
verificarScroll();


  document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("link-sobre");

    link.addEventListener("click", function (e) {
      e.preventDefault(); // Impede o comportamento padrão do href

      const destino = document.getElementById("sobre");

      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });