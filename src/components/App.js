import React, {useState} from "react";
import '../styles/App.css';

/*
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
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
            <option value=""></option>
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
      {welcomeMessage && <h2>{welcomeMessage}</h2>}
    </div>
  )
}

export default App;
*/


export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
  });
 
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    err:'',
  });
 
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Validate form fields
    const newErrors = {};
 
    if (!formData.name || !formData.email || !formData.phoneNumber ||!formData.password) {
      newErrors.err = 'All fields are mandatory';
    }
    else{
      if (!/^[a-zA-Z0-9 ]+$/.test(formData.name)) {
        newErrors.name = 'Name is not alphanumeric';
      }
 
      if (!formData.email.includes('@')) {
        newErrors.email = 'email must contain @';
      }
 
      if (!['male', 'female', 'other'].includes(formData.gender)) {
        newErrors.gender = 'Please identify as male, female or others';
      }
 
      if (!/^\d+$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone Number must contain only numbers';
      }
 
      if (formData.password.length < 6) {
        newErrors.password = 'Password must contain atleast 6 letters';
      }
    }
 
 
    // Update error state
    setErrors(newErrors);
 
    // If there are validation errors, return without submitting
    if (Object.values(newErrors).some((error) => error !== '')) {
      setSubmitted(false);
      return;
    }
 
    // Extract username from email
    const username = formData.email.split('@')[0];
 
    // Display welcome message
    setErrors({}); // Clear previous error messages
    setSubmitted(true);
    alert(`Hello ${username}`);
  };
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear previous error messages on input change
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span style={{ color: 'red' }}>{errors.err}</span>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-testid="name"
          />
        </label>
        <span style={{ color: 'red' }}>{errors.name}</span>
        <br />
 
        <label>
          Email address:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="email"
          />
        </label>
        <span style={{ color: 'red' }}>{errors.email}</span>
        <br />
 
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            data-testid="gender"
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>  
          </select>
          <span style={{ color: 'red' }}>{errors.gender}</span>
        </label>
 
        <br />
 
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            data-testid="phoneNumber"
          />
        </label>
        <span style={{ color: 'red' }}>{errors.phoneNumber}</span>
        <br />
 
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            data-testid="password"
          />
        </label>
        <span style={{ color: 'red' }}>{errors.password}</span>
        <br />
 
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
 
      {submitted && <h2>Hello {formData.name}</h2>}
    </div>
  );
};