import FormInput from "./components/FormInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage:"Should be a valid email address",
      pattern:"^[a-z]{4,20}[@][a-z]{3,8}[.][a-z]{2,7}$",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      errorMessage:"",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include numbers and special characters",
      pattern:"^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9\\s]).{8,}$",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"Passwords don't match",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
