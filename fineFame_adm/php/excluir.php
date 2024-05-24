<?php
    $id_obra = $_POST['id_obra'];

    $con = mysqli_connect("localhost:3306", "root", "@1234", "fineFame");

    $delete_carrinho = "DELETE FROM fineFame.carrinho WHERE id_obra = '$id_obra'";
    $delete_quadro = "DELETE FROM fineFame.quadro WHERE id_obra = '$id_obra'";

    mysqli_query($con, $delete_carrinho);
    mysqli_query($con, $delete_quadro);
?>