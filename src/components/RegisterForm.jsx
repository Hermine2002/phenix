import { useState } from "react";
import FormField from "./ui/FormField";
import PhoneInputField from "./ui/PhoneInput";
import { validateForm } from "../lib/validation";

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
    const validationErrors = validateForm(formData);
    console.log("validationErrors:", validationErrors);

    // Ensure validationErrors is an object
    if (typeof validationErrors !== "object" || validationErrors === null) {
      console.error("validateForm returned invalid value:", validationErrors);
      setErrors({ general: "An error occurred during validation" });
      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitting formData:", formData);
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <FormField
              id="name"
              label="Name"
              type="text"
              placeholder="Name..."
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
          />
          <FormField
              id="surname"
              label="Surname"
              type="text"
              placeholder="Surname..."
              value={formData.surname}
              onChange={handleInputChange}
              error={errors.surname}
          />
          <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
          />
          <PhoneInputField
              id="phone"
              label="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
          />
          <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
          />
          <FormField
              id="repeatPassword"
              label="Repeat Password"
              type="password"
              placeholder="********"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              error={errors.repeatPassword}
          />
          {errors.general && <div className="error">{errors.general}</div>}
          <div className="form-submit">
            <button type="submit" className="btn-register">
              Register
            </button>
          </div>
        </div>
      </form>
  );
};

export default RegistrationForm;