var administrador;
var cliente;

function login_adm(tipo) {
    administrador = tipo;
}

function login_cliente(tipo) {
    cliente = tipo;
}

async function logar(){

    var form = document.getElementById("form");
    var dados = new FormData(form);

    var Usuario;
    if (administrador == 1) {

        Usuario = "adm";
        var php = `../php/login_${Usuario}.php`;

        const response = await fetch(php, {
            method: "POST",
            body: dados
        });

        if (response.ok) {
            const resultado = await response.json();
            if(resultado == "funcionou"){
                window.location.href = "../../fineFame_adm/index.html";
            }
            else{
            alert("E-mail ou senha inválidos!");
        }
        }
        else {
            console.error("Erro ao enviar os dados.");
        }
        
    } 
    else {

        Usuario = "cliente";
        var php = `../php/login_${Usuario}.php`;

        const response = await fetch(php, {
            method: "POST",
            body: dados
        });

        if (response.ok) {
            const resultado = await response.json();
            if(resultado == "funcionou"){
                window.location.href = "../index.html";
            }
            else{
            alert("E-mail ou senha inválidos!");
        }
        }
        else {
            console.error("Erro ao enviar os dados.");
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