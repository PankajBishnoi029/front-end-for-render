import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
  max-width: 500px;
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
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

function Updatecourse() {
  const [Aemail, setAemail] = useState(""); // State for Admin Email
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(true);

  useEffect(() => {
    const storedAemail = localStorage.getItem("user");
    if (storedAemail) {
      const user = JSON.parse(storedAemail);
      setAemail(user.Uemail);
    }
  }, []);

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.put(
        "https://backend-for-render-1.onrender.com/updateProduct",
        {
          Aemail,
          id,
          name,
          description,
          price,
          image,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error updating product");
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Update Product Information</Title>
      <FormGroup>
        <Label>Product ID</Label>
        <Input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Product ID"
        />
      </FormGroup>
      <FormGroup>
        <Label>Product Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product Name"
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
      </FormGroup>
      <FormGroup>
        <Label>Price</Label>
        <Input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        />
      </FormGroup>
      <FormGroup>
        <Label>Image URL</Label>
        <Input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter Image URL"
        />
      </FormGroup>
      <Button onClick={handleUpdateProduct}>Update Product</Button>
      {message && <Message success={messageSuccess}>{message}</Message>}
    </Container>
  );
}

export default Updatecourse;
