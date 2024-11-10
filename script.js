// Smooth Scroll Functionality
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Smooth scroll to the target section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Contact Form Validation (If You Add a Contact Form)
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name == "" || email == "" || message == "") {
      alert("Please fill in all fields.");
      return false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  alert("Thank you for reaching out!");
  return true;
}
