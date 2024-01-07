//your JS code here. If required.
 document.getElementById('contactForm').addEventListener('submit', function(event) {
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!fullName || !email || !message || message.length < 100) {
        document.getElementById('errorMessage').textContent = 'Please fill in all required fields and ensure the message has at least 100 characters.';
        event.preventDefault();
      }
    });