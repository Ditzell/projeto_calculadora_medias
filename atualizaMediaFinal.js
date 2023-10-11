function atualizaMediaFinal() {
    const media = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? 'spanAprovado' : 'spanReprovado';
}
