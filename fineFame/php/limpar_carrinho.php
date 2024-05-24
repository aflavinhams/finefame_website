<?php

    $con = mysqli_connect("localhost:3306", "root", "@1234", "fineFame");

    mysqli_query($con, "SET FOREIGN_KEY_CHECKS = 0");

    $limpar = "TRUNCATE TABLE carrinho;";

    mysqli_query($con, $limpar);

    mysqli_query($con, "SET FOREIGN_KEY_CHECKS = 1");
    
?>