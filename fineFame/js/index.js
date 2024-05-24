var dados;
window.onload = async function loadQuadros(){

    var resultado = await fetch("php/getquadros.php", {
        method: "GET"
    });

    dados = await resultado.json();

    for (var i = 0; i < dados.length; i++) {
        var conteudo =  
            `<div class="card">
                <div class="card_imagem">
                    <img class="card_imagem" src="img/${dados[i].id_obra}.jpeg">
                </div>
                <div class="card_obra">
                    <div class="obra_nome">${dados[i].nome}</div>
                    <div class="obra_pintor">${dados[i].autor}</div>
                </div>
                <div class="card_baixo">
                    <div class="baixo_valor">R$ ${dados[i].valor_obra}</div>
                    <div class="baixo_botao">
                    <button type="button" class="baixo_botao" onclick="adicionar_carrinho(${dados[i].id_obra})"> Adicionar ao carrinho </button> </div>
                </div>
            </div>`;
            
        document.getElementById('quadros').innerHTML += conteudo;
    }

}

function adicionar_carrinho(id_obra){
   
    var dados = new FormData();
    dados.append("id_obra", id_obra)

    fetch("php/adicionar_carrinho.php",{
        method: 'POST',
        body: dados
    });
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

/* SEARCH BAR */

function displayFilteredData(filteredData){
    document.getElementById('quadros').innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
        var conteudo =  
            `<div class="card">
                <div class="card_imagem">
                    <img class="card_imagem" src="img/${filteredData[i].id_obra}.jpeg">
                </div>
                <div class="card_obra">
                    <div class="obra_nome">${filteredData[i].nome}</div>
                    <div class="obra_pintor">${filteredData[i].autor}</div>
                </div>
                <div class="card_baixo">
                    <div class="baixo_valor">${filteredData[i].valor_obra}</div>
                    <div class="baixo_botao">
                    <button type="button" class="baixo_botao" 
                    onclick="adicionar_carrinho(${filteredData[i].id_obra})"> Adicionar ao carrinho </button> </div>
                </div>
            </div>`;
            
        document.getElementById('quadros').innerHTML += conteudo;
    }
}

document.getElementById('search_bar').addEventListener('input', handleSearch);

function handleSearch(){
    console.log("Evento de pesquisa acionado");
    var searchItem = this.value.toLowerCase();
    var filteredData = dados.filter(function(quadro){
        return(
            quadro.nome.toLowerCase().includes(searchItem) ||
            quadro.autor.toLowerCase().includes(searchItem) ||
            quadro.valor_obra.toLowerCase().includes(searchItem) 

        );
    });
    displayFilteredData(filteredData);
}

