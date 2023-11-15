import React from 'react';
import PropertyCard from './rental-card';
import rentalData from '../../rentalData';
import styled from 'styled-components';

const PropertyListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RentalList = () => {
  return (
    <PropertyListContainer>
      <h2>Rental Properties</h2>
      <CardList>
        {rentalData.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </CardList>
    </PropertyListContainer>
  );
};

export default RentalList;

