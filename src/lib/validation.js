export const validateForm = (data) => {
    const errors = {};

    // Validate surname
    if (!data.surname.trim()) {
        errors.surname = "Surname is required";
    }

    // Validate name
    if (!data.name.trim()) {
        errors.name = "Name is required";
    }

    // Validate email
    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Invalid email format";
    }

    // Validate phone
    if (!data.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(data.phone)) {
        errors.phone = "Phone number should contain only digits";
    }

    // Validate password
    if (!data.password) {
        errors.password = "Password is required";
    } else if (data.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    // Validate repeat password
    if (!data.repeatPassword) {
        errors.repeatPassword = "Please confirm your password";
    } else if (data.password !== data.repeatPassword) {
        errors.repeatPassword = "Passwords do not match";
    }

    return errors;
};