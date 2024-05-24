/* MOSTRAR MENU */

var btn = document.querySelector('#btn');
var navbar =  document.querySelector('.navbar');

var menu_aberto = false;

/* MOSTRAR MENU*/

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

window.onload = async function(){

    var resultado = await fetch("../php/carrinho.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    var valor_total = 0;

    for (var i = 0; i <dados.length; i++){
        var conteudo = 
        `
            <div class="quadro">
                <div class="quadro-esquerda">
                    <div class="nome">${dados[i].nome_carrinho}</div>
                    <div class="autor">${dados[i].autor_carrinho}</div>
                </div>
            <div class="valor">R$${dados[i].valor_carrinho}</div>
            </div>`;

        valor_total += parseFloat(dados[i].valor_carrinho);
        document.getElementById('produtos_carrinho').innerHTML += conteudo;
    }

    var total = 
    `   <div class="valor_total"> Total:</div>
        <div class="valor_total"> R$${valor_total} </div>`;

    document.getElementById('total_carrinho').innerHTML = total;
}

function comprar(){
    window.location.href = "pagamento.html";
}

function limpar(){

    fetch("../php/limpar_carrinho.php", {
        method: "POST"
    });

    var carrinho = document.getElementById('produtos_carrinho');
    window.location.reload();

    alert("Exclusão feita com sucesso!");
}
