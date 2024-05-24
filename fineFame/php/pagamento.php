<?php

    $data = date('Y/m/d');
    $forma_pagamento = $_POST['forma_pagamento'];

    $con = mysqli_connect('localhost:3306', 'root', '@1234', 'finefame');

    $query = "INSERT INTO pagamento (data_pagamento, forma_pagamento) VALUES ('$data', '$forma_pagamento')";
    mysqli_query($con, $query);

?>