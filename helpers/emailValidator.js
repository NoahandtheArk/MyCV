// Email Validator

const isValidEmail = () =>
  validateField(
    emailField,
    (val) => EMAIL_REGEX.test(val),
    "Please enter a valid email address",
    emailError
  );
