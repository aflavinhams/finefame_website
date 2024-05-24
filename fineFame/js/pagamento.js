/* VERIFICAR FORMA DE PAGAMENTO */
document.getElementById('forma_pagamento').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value === 'Pix') {
        window.location.href = 'pagamento_pix.html';
    }
});

function pagar(){

    var form = document.getElementById("form");
    var dados = new FormData(form);

    fetch("../php/pagamento.php", {
        method: "POST",
        body: dados
    })

    alert("Pagamento realizado com sucesso!");
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
