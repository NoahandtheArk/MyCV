document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  // Add error message elements
  function createErrorElement(input) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    input.parentNode.appendChild(errorDiv);
    return errorDiv;
  }

  // Create error elements for each input
  const nameError = createErrorElement(nameInput);
  const emailError = createErrorElement(emailInput);
  const subjectError = createErrorElement(subjectInput);
  const messageError = createErrorElement(messageInput);

  // Validation functions
  function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 2) {
      nameError.textContent = "Name must be at least 2 characters long";
      nameInput.classList.add("error");
      return false;
    }
    nameError.textContent = "";
    nameInput.classList.remove("error");
    return true;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address";
      emailInput.classList.add("error");
      return false;
    }
    emailError.textContent = "";
    emailInput.classList.remove("error");
    return true;
  }

  function validateSubject() {
    const subject = subjectInput.value.trim();
    if (subject.length < 5) {
      subjectError.textContent = "Subject must be at least 5 characters long";
      subjectInput.classList.add("error");
      return false;
    }
    subjectError.textContent = "";
    subjectInput.classList.remove("error");
    return true;
  }

  function validateMessage() {
    const message = messageInput.value.trim();
    if (message.length < 10) {
      messageError.textContent = "Message must be at least 10 characters long";
      messageInput.classList.add("error");
      return false;
    }
    messageError.textContent = "";
    messageInput.classList.remove("error");
    return true;
  }

  // Add input event listeners for real-time validation
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  subjectInput.addEventListener("input", validateSubject);
  messageInput.addEventListener("input", validateMessage);

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent =
        "Thank you for your message! I will get back to you soon.";
      form.appendChild(successMessage);

      // Clear form
      form.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  });
});
