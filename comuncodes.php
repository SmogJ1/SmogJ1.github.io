<?php

function drawContact() {
    $formHTML = '
        <div id="contact-form">
            <form action="send_email.php" method="post">
                <label for="contact-name">Nome:</label><br>
                <input type="text" id="contact-name" name="name" class="contact-input" required><br><br>
                
                <label for="contact-email">Email:</label><br>
                <input type="email" id="contact-email" name="email" class="contact-input" required><br><br>
                
                <label for="contact-subject">Assunto:</label><br>
                <input type="text" id="contact-subject" name="subject" class="contact-input" required><br><br>
                
                <label for="contact-message">Mensagem:</label><br>
                <textarea id="contact-message" name="message" class="contact-input" required></textarea><br><br>
                
                <input type="submit" value="Enviar" class="contact-submit">
            </form>
        </div>
    ';

    echo $formHTML;
}

?>