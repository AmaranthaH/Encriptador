function encryptDecryptText(action, text) {
    if (action === 'encrypt') {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    } else if (action === 'decrypt') {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }
}

document.getElementById('encrypt').addEventListener('change', function() {
    var text = document.getElementById('text').value;
    var result = encryptDecryptText('encrypt', text);
    document.getElementById('result').value = result;
    document.querySelector('.encrypt-btn').classList.add('active');
    document.querySelector('.decrypt-btn').classList.remove('active');
});

document.getElementById('decrypt').addEventListener('change', function() {
    var text = document.getElementById('text').value;
    var result = encryptDecryptText('decrypt', text);
    document.getElementById('result').value = result;
    document.querySelector('.decrypt-btn').classList.add('active');
    document.querySelector('.encrypt-btn').classList.remove('active');
});

function showCopiedMessage() {
    var alertMessage = document.createElement('div');
    alertMessage.textContent = 'Texto copiado al portapapeles.';
    alertMessage.classList.add('alert-message'); // Agrega la clase para los estilos
    document.body.appendChild(alertMessage);

    setTimeout(function() {
        alertMessage.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(alertMessage);
        }, 250);
    }, 500);
}

// Función para copiar el texto al portapapeles y mostrar el mensaje de alerta
function copyText() {
    var resultTextarea = document.getElementById('result');
    resultTextarea.select();
    document.execCommand('copy');

    // Llama a la función para mostrar el mensaje de alerta
    showCopiedMessage();
}
