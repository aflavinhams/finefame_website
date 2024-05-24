<?php

    $con = mysqli_connect("localhost:3306", "root", "@1234", "fineFame");

    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email =  $_POST['email'];
        $senha =  $_POST['senha'];

        $mensagem = '';

        $resultado_adm = mysqli_query($con, "SELECT pessoa.email, pessoa.senha FROM fineFame.pessoa INNER JOIN fineFame.administrador ON pessoa.cpf = administrador.cpf_adm WHERE pessoa.email = '$email' AND pessoa.senha = '$senha' ");

        if(mysqli_num_rows($resultado_adm) == 1){
            
            $dados = mysqli_fetch_array($resultado_adm);

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