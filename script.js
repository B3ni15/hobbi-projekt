const nev = prompt("Add meg a neved:")

const textToType = `
Üdv, ${nev}! Köszöntelek a weboldalon nézz körbe és köszönöm ha ídőt fordítasz a weboldalra! További szép napot!`;

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