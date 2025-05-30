document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you, " + name + "! Your message has been received.");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
