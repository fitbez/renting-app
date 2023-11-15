import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import LoginModal from "../login/login";

const StyledNavBarContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px;
`;
const StyledNavBar = styled.nav`
  background-color: #007bff;
  color: white;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  width: 40%;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const StyledNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

const StyledLoginLogout = styled.li`
  display: block;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledNavBar>
      <StyledNavBarContainer>
        <StyledNavLink to="/">
          <h2>RentEase</h2>
        </StyledNavLink>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink to="/rental-list">Rental List</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="/add-property">Add Property</StyledNavLink>
          </StyledNavItem>
          <StyledLoginLogout>
            <p style={{ cursor: "pointer" }} onClick={handleOpenModal}>
              Login
            </p>
          </StyledLoginLogout>
        </StyledNavList>
      </StyledNavBarContainer>
      <LoginModal show={isModalOpen} onClose={handleCloseModal} />
    </StyledNavBar>
  );
};

export default NavBar;
