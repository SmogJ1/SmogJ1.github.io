<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email_from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $email_to = "joaolongras2003@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email_from \r\n";
    
    $full_message = "Você recebeu uma nova mensagem do seu site\n\n".
                    "Aqui estão os detalhes:\n\n".
                    "Nome: $name\n\n".
                    "Email: $email_from\n\n".
                    "Assunto: $subject\n\n".
                    "Mensagem:\n$message\n";
    
    mail($email_to, $subject, $full_message, $headers);
    header('Location: contact.php?success=1');
}
?>
