var administrador;
var cliente;

function cadastro_adm(){
    administrador = document.getElementById('adm').value;
}

function cadastro_cliente(){
    cliente = document.getElementById('cliente').value;
}

function cadastrar(){
    if(administrador == 1){
        
        var senha = document.getElementById("senha").value;
        var confirmarSenha = document.getElementById("confirmarSenha").value;
        var form = document.getElementById("form");
        var dados = new FormData(form);

        if(senha == confirmarSenha){
            fetch("../php/cadastrar_adm.php", {
            method: "POST",
            body: dados
        })

            document.getElementById('nome').value = "";
            document.getElementById('cpf').value = "";
            document.getElementById('email').value = "";
            document.getElementById('senha').value = "";
            document.getElementById('confirmarSenha').value = "";

            alert("Cadastro realizado com sucesso!");
            window.location.href = 'login.html';

        }
        else{
            alert("Campos de senha não compatíveis!")
        }
    }

    else if(cliente == 2){
        var senha = document.getElementById("senha").value;
        var confirmarSenha = document.getElementById("confirmarSenha").value;
        var form = document.getElementById("form");
        var dados = new FormData(form);
        
        if(senha == confirmarSenha){
            fetch("../php/cadastrar_cliente.php", {
            method: "POST",
            body: dados
        })

            document.getElementById('nome').value = "";
            document.getElementById('cpf').value = "";
            document.getElementById('email').value = "";
            document.getElementById('senha').value = "";
            document.getElementById('confirmarSenha').value = "";

            alert("Cadastro realizado com sucesso!");
            window.location.href = 'login.html';

        } 
        else{
            alert("Campos de senha não compatíveis!")
        }
    }
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

