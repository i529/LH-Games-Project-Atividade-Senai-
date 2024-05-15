//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behaivor:'smooth'
        }
    );
}


//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '0009'){
        window.location = "index.html"
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso negado, dados incorretos, digite novamente.");
    }
}

//Ativar alert no botão cadastrar

function cadastro(){
    alert("Cadastro com sucesso!");
    window.location.href = "index.html"
}