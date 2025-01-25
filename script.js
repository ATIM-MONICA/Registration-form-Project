document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission until validation passes
        if (validateForm()) {
            alert("Registration Successful!");
            form.reset(); // Reset form after successful submission
        }
    });

    function validateForm() {
        let isValid = true;

        // Name validation
        const name = document.getElementById("name").value.trim();
        const nameError = document.getElementById("nameError");
        if (name === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        const email = document.getElementById("email").value.trim();
        const emailError = document.getElementById("emailError");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Password validation
        const password = document.getElementById("password").value;
        const passwordError = document.getElementById("passwordError");
        const passwordStrength = document.getElementById("passwordStrength");
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if (!strongPassword.test(password)) {
            passwordError.textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
            passwordStrength.innerHTML = "<span style='color: red;'>Weak</span>";
            isValid = false;
        } else {
            passwordError.textContent = "";
            passwordStrength.innerHTML = "<span style='color: green;'>Strong</span>";
        }

        // Confirm Password validation
        const confirmPassword = document.getElementById("confirmPassword").value;
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        if (confirmPassword !== password || confirmPassword === "") {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        // Mobile number validation
        const mobile = document.getElementById("mobile").value.trim();
        const mobileError = document.getElementById("mobileError");
        const mobilePattern = /^[0-9]{10}$/; // Allows only 10-digit numbers
        if (!mobilePattern.test(mobile)) {
            mobileError.textContent = "Enter a valid 10-digit mobile number.";
            isValid = false;
        } else {
            mobileError.textContent = "";
        }

        // Language selection validation
        const language = document.getElementById("language").value;
        const languageError = document.getElementById("languageError");
        if (language === "") {
            languageError.textContent = "Please select a language.";
            isValid = false;
        } else {
            languageError.textContent = "";
        }

        // File attachment validation
        const fileInput = document.getElementById("attachment");
        const fileError = document.getElementById("fileError");
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf|\.zip)$/i;
            if (!allowedExtensions.test(file.name)) {
                fileError.textContent = "Invalid file type. Allowed: JPG, PNG, PDF, ZIP.";
                isValid = false;
            } else {
                fileError.textContent = "";
            }
        }

        // Gender validation
        const genderError = document.getElementById("genderError");
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            genderError.textContent = "Please select your gender.";
            isValid = false;
        } else {
            genderError.textContent = "";
        }

        // Terms & Conditions validation
        const terms = document.getElementById("terms");
        const termsError = document.getElementById("termsError");
        if (!terms.checked) {
            termsError.textContent = "You must accept Conditions and Terms of Use.";
            isValid = false;
        } else {
            termsError.textContent = "";
        }

        return isValid;
    }
});

    // Function to show error message
    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        input.style.borderColor = "red";
    }

    // Function to clear error message
    function clearError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = "";
        input.style.borderColor = "#ccc";
    }
