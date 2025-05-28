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
  escreverTexto("texto2", "Olá, bem-vindo ao meu Portifólio!", 150);
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

function mostrarAoScroll() {
  const elementos = document.querySelectorAll(".fade-in");

  elementos.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", mostrarAoScroll);
window.addEventListener("load", mostrarAoScroll);

document.addEventListener("DOMContentLoaded", () => {
  const linkSobre = document.getElementById("link-sobre");

  if (linkSobre) {
    linkSobre.addEventListener("click", (e) => {
      const isMobile = window.innerWidth <= 1000;

      if (isMobile) {
        e.preventDefault();
        window.location.href = "sobre.html";
      } else {
        e.preventDefault();
        const destino = document.getElementById("sobre");
        if (destino) {
          destino.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
});
