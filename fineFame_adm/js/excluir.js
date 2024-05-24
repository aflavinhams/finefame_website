window.onload = async function(){

    var resultado = await fetch("php/getquadros_excluir.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    for (var i = 0; i < dados.length; i++) {
        var conteudo =  
            `<option value="${dados[i].nome}" name="${dados[i].nome}" id="${dados[i].id_obra}"> ${dados[i].nome} </option>`;
            
        document.getElementById('opcoes').innerHTML += conteudo;
    }

}

function excluir(){

    var select = document.getElementById("opcoes");
    var id_obra = select.options[select.selectedIndex].id;
    var dados = new FormData();
    dados.append("id_obra", id_obra);

    fetch("php/excluir.php", {
        method: "POST",
        body: dados
    });

    select.remove(select.selectedIndex);

    alert("Exclusão feita com sucesso!");
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