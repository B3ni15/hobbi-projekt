<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $email = $_POST["email"];
  $code = $_POST["code"];

  // Elküldjük az e-mailt
  $to = $email;
  $subject = 'Ellenőrző kód';
  $message = "Az ellenőrző kódod: $code";
  $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  // Válasz a kliensnek
  echo 'success';
}
?>
