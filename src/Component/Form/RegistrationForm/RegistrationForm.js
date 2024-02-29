import React, { useState } from "react";
import { validateEmail } from "../../../util";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const PasswordError = () => {
    return (
      <p className="fieldError">Password should be at least 8 character </p>
    );
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  function getIsFormValid() {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  }

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created");
    clearForm();
  };
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="field">
              <label htmlFor="firstname">
                Name:<sup>*</sup>
              </label>
              <input
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">
                Email<sup>*</sup>
              </label>
              <input
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">
                Password<sup>*</sup>
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password.value}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
                onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordError />
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="role">
                Role<sup>*</sup>
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button  className = "  regis-btn"type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
