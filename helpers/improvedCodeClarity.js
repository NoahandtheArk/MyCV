// Improved code for Clarity
// contact.js
document.addEventListener("DOMContentLoaded", () => {
  // ****** CONSTANTS ******
  const MIN_NAME_LENGTH = 2;
  const MIN_SUBJECT_LENGTH = 5;
  const MIN_MESSAGE_LENGTH = 10;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ****** FORM & INPUTS ******
  const contactForm = document.querySelector(".contact-form form");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const messageField = document.getElementById("message");

  // ****** UTILITY FUNCTIONS ******

  /**
   * Creates an error message container next to an input field.
   * @param {HTMLElement} input
   * @returns {HTMLElement} errorDiv
   */
  const createErrorContainer = (input) => {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    input.parentNode.appendChild(errorDiv);
    return errorDiv;
  };

  /**
   * Generic field validation.
   * @param {HTMLElement} input - The form input element
   * @param {Function} testFn - A function that returns true if valid
   * @param {string} errorMessage - Message to display if invalid
   * @param {HTMLElement} errorContainer - The error message div
   * @returns {boolean} - Whether the field is valid
   */
  const validateField = (input, testFn, errorMessage, errorContainer) => {
    const value = input.value.trim();
    if (!testFn(value)) {
      errorContainer.textContent = errorMessage;
      input.classList.add("error");
      return false;
    }
    errorContainer.textContent = "";
    input.classList.remove("error");
    return true;
  };

  // ****** ERROR ELEMENTS ******
  const nameError = createErrorContainer(nameField);
  const emailError = createErrorContainer(emailField);
  const subjectError = createErrorContainer(subjectField);
  const messageError = createErrorContainer(messageField);

  // ****** SPECIFIC VALIDATORS ******
  const isValidName = () =>
    validateField(
      nameField,
      (val) => val.length >= MIN_NAME_LENGTH,
      `Name must be at least ${MIN_NAME_LENGTH} characters long`,
      nameError
    );

  const isValidEmail = () =>
    validateField(
      emailField,
      (val) => EMAIL_REGEX.test(val),
      "Please enter a valid email address",
      emailError
    );

  const isValidSubject = () =>
    validateField(
      subjectField,
      (val) => val.length >= MIN_SUBJECT_LENGTH,
      `Subject must be at least ${MIN_SUBJECT_LENGTH} characters long`,
      subjectError
    );

  const isValidMessage = () =>
    validateField(
      messageField,
      (val) => val.length >= MIN_MESSAGE_LENGTH,
      `Message must be at least ${MIN_MESSAGE_LENGTH} characters long`,
      messageError
    );

  // ****** EVENT LISTENERS ******
  nameField.addEventListener("input", isValidName);
  emailField.addEventListener("input", isValidEmail);
  subjectField.addEventListener("input", isValidSubject);
  messageField.addEventListener("input", isValidMessage);

  // ****** FORM SUBMISSION ******
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid =
      isValidName() && isValidEmail() && isValidSubject() && isValidMessage();

    if (valid) {
      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent =
        "Thank you for your message! I will get back to you soon.";
      contactForm.appendChild(successMessage);

      // Reset form
      contactForm.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  });
});
