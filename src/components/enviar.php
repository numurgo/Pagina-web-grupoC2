<!--Documento php para enviar el formulario a un correo. No hemos conseguido 
que funcione pero al eliminarlo gulp nos daba problemas, por lo que hemos 
decidido dejarlo aunque no sea funcional.
En la carpeta dist aparece como un archivo html -->

<?php

$mail='correunuriam@gmail.com';


$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$thank="gracias.html";

$message = "
nombre:".$nombre."
telefono:".$telefono."
email:".$email."
mensaje:".$mensaje."";

if (mail($mail,"Formulario de Consulta",$message))
Header ("Location: $thank";

?>