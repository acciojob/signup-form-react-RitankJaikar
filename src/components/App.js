import React, {useState} from "react";
import '../styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: ""
  })
  const [error, setError] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const validateForm = () => {
    const { name, email, gender, phoneNumber, password } = formData;

    // All fields are mandatory
    if (!name || !email || !gender || !phoneNumber || !password) {
      return "All fields are mandatory";
    }

    // Name validation
    if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
      return "Name is not alphanumeric";
    }

    // Email validation
    if (!email.includes("@")) {
      return "email must contain @";
    }

    // Gender validation
    if (!["male", "female", "other"].includes(gender)) {
      return "Please identify as male, female or others";
    }

    // Phone number validation
    if (!/^\d+$/.test(phoneNumber)) {
      return "Phone Number must contain only numbers";
    }

    // Password length validation
    if (password.length < 6) {
      return "Password must contain atleast 6 letters";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setWelcomeMessage("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const username = formData.email.split("@")[0];
    setWelcomeMessage(`Hello ${username.toUpperCase()}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            data-testid="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            data-testid="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Gender: </label>
          <select
            data-testid="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Phone Number: </label>
          <input
            data-testid="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            data-testid="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>

      {error && <span style={{ color: "red" }}>{error}</span>}
      <span>Please identify as male, female or others</span>
      {welcomeMessage && <h2>{welcomeMessage}</h2>}
    </div>
  )
}


export default App;
