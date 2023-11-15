import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/home-page";
import LoginPage from "./components/pages/login-page";
import EnrollPage from "./components/pages/enroll-page";
import RentalListPage from "./components/pages/rental-list-page";
import AddPropertyPage from "./components/pages/add-property-page";
import NavBar from "./components/nav/nav";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/enroll' element={<EnrollPage />} />
        <Route path='/rental-list' element={<RentalListPage />} />
        <Route path='/add-property' element={<AddPropertyPage />} />
      </Routes>
    </div>
  );
}

export default App;
