// LoginModal.js
import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const LoginTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  color: #333;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled.span`
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1rem;
`;

const LoginModal = ({ show, onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false); // State to track registration mode
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = () => {
    if (isRegistering) {
      // Implement registration logic here
      // You can send the email and password to your server for registration
      // For this example, we'll just display the values
      alert(`Registered with Email: ${email}, Password: ${password}`);
    } else {
      // Implement login logic here
      // You can send the email and password to your server for authentication
      // For this example, we'll just display the values
      alert(`Logged in with Email: ${email}, Password: ${password}`);
    }
    onClose(); // Close the modal after login or registration
  };

  return (
    <ModalWrapper show={show}>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <LoginTitle>{isRegistering ? "Register" : "Login"}</LoginTitle>
        <LoginForm>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {isRegistering && (
            <>
              <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
              <FormInput
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm your password"
              />
            </>
          )}
          <LoginButton onClick={handleLogin}>
            {isRegistering ? "Sign Up" : "Login"}
          </LoginButton>
        </LoginForm>
        <RegisterLink onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Back to Login" : "Register"}
        </RegisterLink>
      </ModalContent>
    </ModalWrapper>
  );
};

export default LoginModal;
