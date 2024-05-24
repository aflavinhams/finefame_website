function cadastrar(){

    var form = document.getElementById("formulario");
    var dados = new FormData(form);

    fetch("php/cadastrar.php", {
        method: "POST",
        body: dados
    });

    document.getElementById('nome_obra').value = "";
    document.getElementById('nome_autor').value = "";
    document.getElementById('valor_obra').value = "";

    alert("Cadastro realizado com sucesso!");
}

/* ALERTAR UPLOAD */

document.getElementById('imagem').addEventListener('input', alertUpload);

function alertUpload(){
    alert("Upload de imagem realizado com sucesso!");
}

/* MOSTRAR MENU */

var btn = document.querySelector('#btn');
var navbar =  document.querySelector('.navbar');

var menu_aberto = false;

function showMenu(){

    if(!menu_aberto){
        navbar.style.width = '250px';
        navbar.style.transition = '1s';
        menu_aberto = true;
    }
    else {
        navbar.style.width = '1px';
        navbar.style.transition = '1s';
        menu_aberto = false;
    }
    
}