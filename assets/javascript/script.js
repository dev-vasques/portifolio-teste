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


    function redirecionarParaMobile() {
        const isMobile = window.innerWidth <= 768;
        const isMobilePage = window.location.pathname.includes("mobile.html");

        if (isMobile && !isMobilePage) {
            window.location.href = "mobile.html";
        } else if (!isMobile && isMobilePage) {
            window.location.href = "index.html"; // Ajuste para a página desktop correta
        }
    }

    redirecionarParaMobile();
    window.addEventListener("resize", redirecionarParaMobile);


