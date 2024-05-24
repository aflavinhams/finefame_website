<?php

    $con = mysqli_connect("localhost:3306", "root", "@1234", "fineFame");

    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email =  $_POST['email'];
        $senha =  $_POST['senha'];

        $mensagem = '';

        $resultado_cliente = mysqli_query($con, "SELECT pessoa.email, pessoa.senha FROM fineFame.pessoa INNER JOIN fineFame.cliente ON pessoa.cpf = cliente.cpf_cliente WHERE pessoa.email = '$email' AND pessoa.senha = '$senha'");

        if(mysqli_num_rows($resultado_cliente) == 1){
            
            $dados = mysqli_fetch_array($resultado_cliente);

            $mensagem = "funcionou";
            $json = json_encode($mensagem);
            echo $json;
        }
        else{
            $mensagem = "E-mail ou senha invalidos";
            $json = json_encode($mensagem);
            echo $json;
        }
    }
    else{
        echo "Campos de e-mail e senha não foram enviados.";
    }

    mysqli_close($con);   

?>