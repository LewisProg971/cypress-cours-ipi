document.addEventListener('DOMContentLoaded', () => {
    const keyInput = document.getElementById('key');
    const textInput = document.getElementById('text');
    const cypherBtn = document.getElementById('cypher-btn');
    const output = document.getElementById('output');

    // Fonction d'encodage César
    function caesarCipher(str, shift) {
        // Ramener le décalage entre 0 et 25 au cas où il soit très grand
        shift = shift % 26;
        if (shift < 0) shift += 26; // Gérer les clés négatives

        return str.replace(/[a-zA-Z]/g, (char) => {
            // Déterminer si c'est une majuscule ou une minuscule
            const base = char.charCodeAt(0) >= 97 ? 97 : 65;
            // Appliquer le décalage
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        });
    }

    // Écouteur d'événement sur le bouton
    cypherBtn.addEventListener('click', () => {
        const key = parseInt(keyInput.value, 10) || 0;
        const text = textInput.value;
        const result = caesarCipher(text, key);
        
        output.textContent = result;
    });
});