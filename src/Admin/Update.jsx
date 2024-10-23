import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

function Update() {
  const [Aemail, setAemail] = useState("");
  const [newAemail, setNewAemail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(true);

  const handleUpdateAemail = async () => {
    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/updateemail",
        {
          Aemail,
          newAemail,
        }
      );
      setMessage(response.data.message);
      setMessageSuccess(true);
    } catch (error) {
      setMessage("Error updating Aemail");
      setMessageSuccess(false);
      console.error(error);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/updatePassword",
        {
          Aemail,
          newPassword,
        }
      );
      setMessage(response.data.message);
      setMessageSuccess(true);
    } catch (error) {
      setMessage("Error updating Password");
      setMessageSuccess(false);
      console.error(error);
    }
  };

  const handleUpdatePhone = async () => {
    try {
      const response = await axios.post(
        "https://backend-for-render-1.onrender.com/updatePhone",
        {
          Aemail,
          newPhone,
        }
      );
      setMessage(response.data.message);
      setMessageSuccess(true);
    } catch (error) {
      setMessage("Error updating Phone Number");
      setMessageSuccess(false);
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Update Admin Information</Title>
      <FormGroup>
        <Label>Admin ID</Label>
        <Input
          type="text"
          value={Aemail}
          onChange={(e) => setAemail(e.target.value)}
          placeholder="Enter Admin ID"
        />
      </FormGroup>
      <FormGroup>
        <Label>New Admin email</Label>
        <Input
          type="text"
          value={newAemail}
          onChange={(e) => setNewAemail(e.target.value)}
          placeholder="Enter New Admin ID"
        />
        <Button onClick={handleUpdateAemail}>Update Aemail</Button>
      </FormGroup>
      <FormGroup>
        <Label>New Password</Label>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter New Password"
        />
        <Button onClick={handleUpdatePassword}>Update Password</Button>
      </FormGroup>
      <FormGroup>
        <Label>New Phone Number</Label>
        <Input
          type="text"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          placeholder="Enter New Phone Number"
        />
        <Button onClick={handleUpdatePhone}>Update Phone Number</Button>
      </FormGroup>
      {message && <Message success={messageSuccess}>{message}</Message>}
    </Container>
  );
}

export default Update;
