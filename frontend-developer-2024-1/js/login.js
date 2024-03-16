const EMAIL = "teste@teste.com"
const SENHA = "123456"

var campoEmail = document.querySelector ("#email");
var campoSenha = document.querySelector ("#senha");
var btnEntrar =  document.getElementById ('btn-entrar');

btnEntrar.addEventListener ("click", () => {

    let emailDigitado = campoEmail.value;
    let senhaDigitada = campoSenha.value;

    if (!emailDigitado || !senhaDigitada){
        alert("O campo de e-mail e senha não podem ficar vazios. Por favor, preencha-os.")
        return;
    }

    if(emailDigitado != EMAIL || senhaDigitada != SENHA) {
        alert('Email ou senha incorretos. Tente novamente.');
        return;
    }

    mostrarLoading();

    // salvarToken(response.token);
    // salvarUsuario(response.usuario);
    
    setTimeout(() => {
        window.open('controle-clientes.html', '_self');
    },5000)

    
});

function autenticar (email,senha) {
    const URL = 'http://localhost:3400/login';

    fetch(URL, {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({email, senha})
    })
    .then(response => response = response.json())
    .then(response => {
        console.log(response)
    })
    .catch(erro => {
        console.log(erro)
    })
}

function mostrarLoading(){
    const divLoading = document.getElementById("loading");
    divLoading.style.display = "block";

    const divBoxLogin = document.querySelector('div.caixa-login');
    divBoxLogin.style.display = "none";
    
}

document.addEventListener("keypress", function(e) {

    if(e.key === "Enter") {
    
        const btn = document.querySelector("#btn-entrar");

        btn.click();
    }
})