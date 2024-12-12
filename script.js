// script.js

document.addEventListener('DOMContentLoaded', () => {
    const resultText = document.getElementById('resultText');
    const encryptBtn = document.getElementById('encryptBtn');
    const inputText = document.getElementById('inputText');

    // Function to perform encryption based on selected cipher
    function encryptText(text, cipher) {
        switch (cipher) {
            case 'mono':
                return monoalphabeticCipher(text);
            case 'poly':
                return polyalphabeticCipher(text);
            case 'playfair':
                return playfairCipher(text);
            case 'hill':
                return hillCipher(text);
            default:
                return 'Invalid cipher selected.';
        }
    }

    // Example implementations of ciphers
    function monoalphabeticCipher(text) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const shiftedAlphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        let encrypted = '';
        for (let char of text.toUpperCase()) {
            if (alphabet.includes(char)) {
                encrypted += shiftedAlphabet[alphabet.indexOf(char)];
            } else {
                encrypted += char;
            }
        }
        return encrypted;
    }

    function polyalphabeticCipher(text) {
        // Simplified Vigenère Cipher example
        const key = 'KEY';
        let encrypted = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const keyCode = key[i % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
            encrypted += String.fromCharCode(((charCode - 65 + keyCode) % 26) + 65);
        }
        return encrypted.toUpperCase();
    }

    function playfairCipher(text) {
        return 'Playfair cipher not implemented yet!';
    }

    function hillCipher(text) {
        return 'Hill cipher not implemented yet!';
    }

    // Event listener for the encrypt button
    encryptBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        const cipherType = document.querySelector('.selected-cipher')?.dataset.type || 'mono'; // Default to mono
        if (text) {
            const encryptedText = encryptText(text, cipherType);
            resultText.textContent = `Encrypted Text: ${encryptedText}`;
        } else {
            resultText.textContent = 'Please enter text to encrypt.';
        }
    });

    // Event listener for cipher selection
    const cipherOptions = document.querySelectorAll('.substitution-option');
    cipherOptions.forEach(option => {
        option.addEventListener('click', () => {
            cipherOptions.forEach(opt => opt.classList.remove('selected-cipher'));
            option.classList.add('selected-cipher');
        });
    });
});

