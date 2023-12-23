
<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$senha = $_POST['senha'];

$con = mysqli_connect('localhost', 'root', '', 'site_jogos');

$sql = "INSERT INTO clientes (nome, email, telefone, senha) VALUES ('".$nome."','".$email."','".$telefone."','".$senha."')";

if(mysqli_query($con, $sql)) {
    echo "dados cadastrados";
}else{
    echo "erro ao gravar";
}
mysqli_close($con);

?>
<a href="index.html">VOLTAR</a>