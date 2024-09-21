
import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import logoImg from "../../images/logo.jpg";
import basketImg from "../../images/Basket.svg";

const Nav = (props) => {

  return (
    <Container {...props}>
      <ul>
        <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
        <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="/">Home</HashLink> </li>
        <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="/#about">About</HashLink> </li>
        <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="/#menu">Menu</HashLink> </li>
        <li> <HashLink style={{ textDecoration: 'none', color: '#000000' }} to="/bookings">Reservations</HashLink> </li>
        <li className="orderBtn"> <HashLink style={{ textDecoration: 'none', color: '#ffffff' }} role="button" to="#">Order Online</HashLink> </li>
        <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
      </ul>
    </Container>
  );
};

export default Nav;