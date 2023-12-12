const textToType = `
Üdv a weboldalon, felhasználó! Köszöntelek a weboldalon nézz körbe és köszönöm ha ídőt forítasz a weboldalra! Továbbió szép napot!`;

    let currentText = '';
    let index = 0;
    const speed = 50;

    function typeText() {
        document.getElementById('text-container').textContent = currentText;
        if (index < textToType.length) {
            currentText += textToType.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText();

