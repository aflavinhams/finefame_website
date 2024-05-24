<?php

    $nome = $_POST['nome_obra'];
    $autor = $_POST['nome_autor'];
    $valor = $_POST['valor_obra'];

    $imagem = $_FILES['imagem'];

    $con = mysqli_connect('localhost:3306', 'root', '@1234', 'fineFame');

    $query = "INSERT INTO quadro (nome, autor, valor_obra) VALUES ('$nome', '$autor', '$valor')";

    if ($imagem["type"] == "image/jpeg") {

        mysqli_query($con, $query);
        
        $id = mysqli_insert_id($con);

        $novo_endereco = "../../fineFame/img/" . $id . ".jpeg";

        move_uploaded_file($imagem["tmp_name"], $novo_endereco);
        
        $mensagem = "Upload realizado";

    } else {

        $mensagem = "Somente é permitido o upload de imagens no formato JPEG.";
    }

    

    
?>
