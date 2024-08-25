// Función para encriptar el texto
function encryptText() {
    const inputText = document.getElementById('input-text').value;
    
    if (!inputText) {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    
    // Ejemplo sencillo de encriptación: sumar 1 al código de cada letra
    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        encryptedText += String.fromCharCode(inputText.charCodeAt(i) + 1);
    }
    
    displayResult(encryptedText);
}

// Función para desencriptar el texto
function decryptText() {
    const inputText = document.getElementById('input-text').value;
    
    if (!inputText) {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }
    
    // Invertir el proceso de encriptación
    let decryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        decryptedText += String.fromCharCode(inputText.charCodeAt(i) - 1);
    }
    
    displayResult(decryptedText);
}

// Función para mostrar el resultado encriptado/desencriptado
function displayResult(text) {
    const resultDisplay = document.getElementById('result-display');

    resultDisplay.innerHTML = '';

    const resultText = document.createElement('p');
    resultText.className = 'message-title';
    resultText.textContent = text;
    resultDisplay.appendChild(resultText);

    // Crear el botón de copiar
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar';
    copyButton.className = 'copy-btn';
    copyButton.onclick = function() {
        copyToClipboard(text);
    };
    resultDisplay.appendChild(copyButton);
}

// Función para copiar el texto al portapapeles
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Texto copiado al portapapeles');
}
