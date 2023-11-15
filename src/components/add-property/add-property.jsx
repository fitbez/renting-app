import React, { useState } from "react";
import rentalData from "../../rentalData";
import { useNavigate } from "react-router-dom";
import {
  StyledLabel,
  StyledButton,
  StyledFileInput,
  StyledFormContainer,
  StyledFormGroup,
  StyledInput,
  StyledSelect,
  StyledTextArea,
} from "./StyledComponents";

const AddProperty = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    property_name: "",
    description: "",
    address: "",
    rental_price: "",
    number_of_bedrooms: "",
    number_of_bathrooms: "",
    square_footage: "",
    property_type: "Apartment",
    available_from: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const image = event.target.files[0];
      const imageUrl = URL.createObjectURL(image);

      setFormData({ ...formData, image: image, imageUrl });
      // setFormData({ ...formData, image });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the property data to your server or perform any other necessary actions here
    const newProperty = {
      id: rentalData.length + 1, // Ensure the ID is unique
      ...formData,
    };
    rentalData.push(newProperty)
    navigate('/rental-list')
    console.log('rental data', rentalData)
  };

  return (
    <StyledFormContainer>
      <h2>Add a New Property</h2>
      <form onSubmit={handleSubmit}>
        <StyledFormGroup>
          <StyledLabel htmlFor='property_name'>Property Name:</StyledLabel>
          <StyledInput
            type='text'
            id='property_name'
            name='property_name'
            value={formData.property_name}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='description'>Description:</StyledLabel>
          <StyledTextArea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='address'>Address:</StyledLabel>
          <StyledInput
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='rental_price'>Rental Price:</StyledLabel>
          <StyledInput
            type='number'
            id='rental_price'
            name='rental_price'
            value={formData.rental_price}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='number_of_bedrooms'>
            Number of Bedrooms:
          </StyledLabel>
          <StyledInput
            type='number'
            id='number_of_bedrooms'
            name='number_of_bedrooms'
            value={formData.number_of_bedrooms}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='number_of_bathrooms'>
            Number of Bathrooms:
          </StyledLabel>
          <StyledInput
            type='number'
            id='number_of_bathrooms'
            name='number_of_bathrooms'
            value={formData.number_of_bathrooms}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='square_footage'>Square Footage:</StyledLabel>
          <StyledInput
            type='number'
            id='square_footage'
            name='square_footage'
            value={formData.square_footage}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='property_type'>Property Type:</StyledLabel>
          <StyledSelect
            id='property_type'
            name='property_type'
            value={formData.property_type}
            onChange={handleChange}
          >
            <option value='Apartment'>Apartment</option>
            <option value='House'>House</option>
            <option value='Condo'>Condo</option>
          </StyledSelect>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='available_from'>Available From:</StyledLabel>
          <StyledInput
            type='date'
            id='available_from'
            name='available_from'
            value={formData.available_from}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor='image'>Upload Image:</StyledLabel>
          <StyledFileInput
            type='file'
            id='image'
            name='image'
            accept='image/*'
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledButton type='submit'>Submit</StyledButton>
      </form>
    </StyledFormContainer>
  );
};

export default AddProperty;
