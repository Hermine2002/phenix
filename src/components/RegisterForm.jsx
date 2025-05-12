import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import CustomPhoneInput from "./ui/PhoneInput";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">Register</h1>
        <Input 
          type="text"
          placeholder="Surname..."  
          value={form.surname}
          setValue={(t) => setForm(prev => ({...prev, surname: t}))}
          header="Surname"
        />

        <Input 
          type="text"
          placeholder="Name..."
          value={form.name}
          setValue={(t) => setForm(prev => ({...prev, name: t}))}
          header="Name"
        />

        <Input 
          type="email"
          placeholder="example@example.com"
          value={form.email}
          setValue={(t) => setForm(prev => ({...prev, email: t}))}
          header="Email"
        />

        <CustomPhoneInput 
          header="Phone Number"
          value={form.phone}
          setValue={(t) => setForm(prev => ({...prev, phone: t}))}
        />

        <Input 
          type="password"
          placeholder="********"
          value={form.password}
          setValue={(t) => setForm(prev => ({...prev, password: t}))}
          header="Password"
        />

        <Input 
          type="password"
          placeholder="********"
          value={form.passwordConfirm}
          setValue={(t) => setForm(prev => ({...prev, passwordConfirm: t}))}
          header="Repeat Password"
        />

        <Button
          type="submit"
          className="register-button"
        >
          <span className="button-text">Register</span>
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;