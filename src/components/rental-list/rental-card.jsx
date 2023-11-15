import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px; /* Fixed width */
  height: 400px; /* Fixed height */
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  overflow: hidden; /* Hide overflow content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%; /* Image covers the whole width of the card */
  height: 50%; /* Adjust the height as needed */
  object-fit: cover; /* Ensure the image covers the entire area */
`;

const CardContent = styled.div`
  padding: 10px;
`;

const PropertyCard = ({ property }) => {
  return (
    <CardContainer>
      <CardImage src={property.imageUrl} alt={property.property_name} />
      <CardContent>
        <h3>{property.property_name}</h3>
        <p>{property.description}</p>
        <p><strong>Rental Price:</strong> ${property.rental_price}/month</p>
        <p><strong>Bedrooms:</strong> {property.number_of_bedrooms}</p>
        <p><strong>Bathrooms:</strong> {property.number_of_bathrooms}</p>
        {/* Add more property details here */}
      </CardContent>
    </CardContainer>
  );
};

export default PropertyCard;
