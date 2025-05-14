import { useEffect } from "react";
import RegistrationForm from "./RegisterForm";
import "./RegisterForm.css";
const RegistrationModal = ({ onClose }) => {
    // Close modal on escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    // Prevent scrolling of background
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleFormSubmit = async (data) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    surname: data.surname,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    password_confirmation: data.repeatPassword,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                console.error('Registration failed:', result.errors);
                alert('Registration failed: ' + JSON.stringify(result.errors));
                return;
            }

            console.log('Registration successful:', result);
            alert('Registration successful!');
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <div className="modal-container" onClick={handleModalClick}>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>×</button>
                <h1 className="modal-title">Register</h1>
                <RegistrationForm onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
};

export default RegistrationModal;