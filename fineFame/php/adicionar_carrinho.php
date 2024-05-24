<?php

   $id_obra = $_POST['id_obra'];

   $con = mysqli_connect("localhost:3306", "root", "@1234", "fineFame");

   $resultado = mysqli_query($con, "INSERT INTO carrinho (id_obra, nome_carrinho, autor_carrinho, valor_carrinho) 
   SELECT '$id_obra', nome, autor, valor_obra FROM quadro WHERE id_obra = '$id_obra'");

   $dados = array();

   while($registro = mysqli_fetch_assoc($resultado)){

      array_push($dados, $registro);
   }
     
   $dados['valor_total'] = $valor_total;

   $json = json_encode($dados);
   echo $json;

?>