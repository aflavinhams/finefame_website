<?php
    
    $nome = $_POST['Nome'];
    $cpf = $_POST['CPF'];
    $email = $_POST['E-mail'];
    $senha = $_POST['Senha'];

    $con = mysqli_connect('localhost:3306', 'root', '@1234', 'finefame');

    $query1 = "INSERT INTO pessoa (cpf, nome, email, senha) VALUES ('$cpf', '$nome', '$email', '$senha')";
    $query2 = "INSERT INTO administrador (cpf_adm) VALUES ('$cpf')";

    mysqli_query($con, $query1);
    mysqli_query($con, $query2);
    
?>