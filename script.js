document.addEventListener('DOMContentLoaded', function () {
    const pageContent = document.body.textContent.toLowerCase();
  
    if (pageContent.includes('ok')) {
      const email = prompt('Kérlek add meg az e-mail címed:');
      
      // Generálj egy kódot
      const verificationCode = generateCode();
  
      // Küldj egy kérést a szervernek az e-mail és kód elküldéséhez
      sendVerificationEmail(email, verificationCode);
    }
  });
  
  function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
  
  function sendVerificationEmail(email, code) {
    // Küldj egy XMLHttpRequest kérést a szervernek
    const xhr = new XMLHttpRequest();
    const url = 'server.php';
    const params = `email=${email}&code=${code}`;
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Az ellenőrző kód elküldve az e-mail címedre!');
      }
    };
    
    xhr.send(params);
  }
  