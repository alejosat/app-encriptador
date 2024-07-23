function encriptar(texto) {
    if (!/^[a-z\s]+$/.test(texto)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El texto debe contener solo letras minúsculas y espacios, sin acentos ni caracteres especiales.'
        });
        return '';
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Texto encriptado correctamente.'
    });

    return textoEncriptado;
}

function desencriptar(texto) {
    if (!/^[a-z\s]+$/.test(texto)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El texto debe contener solo letras minúsculas y espacios, sin acentos ni caracteres especiales.'
        });
        return '';
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Texto desencriptado correctamente.'
    });

    return textoDesencriptado;
}

function encriptarTexto() {
    const inputTexto = document.getElementById("inputText").value;
    const textoEncriptado = encriptar(inputTexto);
    if (textoEncriptado) {
        document.getElementById("outputText").value = textoEncriptado;
        document.getElementById("inputText").value = '';
        document.getElementById("imageContainer").style.display = 'none';
        document.querySelector(".main__container__controls__output__button").style.display = 'block';
    }
}

function desencriptarTexto() {
    const inputTexto = document.getElementById("inputText").value;
    const textoDesencriptado = desencriptar(inputTexto);
    if (textoDesencriptado) {
        document.getElementById("outputText").value = textoDesencriptado;
        document.getElementById("inputText").value = '';
        document.getElementById("imageContainer").style.display = 'none';
        document.querySelector(".main__container__controls__output__button").style.display = 'block';
    }
}

function copiarTexto() {
    const outputTexto = document.getElementById("outputText");
    outputTexto.select();
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Texto copiado al portapapeles'
    });
}
