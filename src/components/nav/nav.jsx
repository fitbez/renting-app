import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBarContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
  return (
    <StyledNavBar>
      <StyledNavBarContainer>
        <h2>
          <StyledNavLink to='/'>Rentals</StyledNavLink>
        </h2>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink to='/rental-list'>Rental List</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to='/add-property'>Add Property</StyledNavLink>
          </StyledNavItem>
          <StyledLoginLogout>
            <StyledNavLink to='/'>Log out</StyledNavLink>
          </StyledLoginLogout>
        </StyledNavList>
      </StyledNavBarContainer>
    </StyledNavBar>
  );
};

export default NavBar;
