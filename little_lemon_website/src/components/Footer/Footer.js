import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../images/restaurant.jpg";

const Footer = (props) => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>Little<br />Lemon</h4>
          <ul>
            <li> <HashLink style={{ color: '#ffffff' }} to="/">Home</HashLink> </li>
            <li> <HashLink style={{ color: '#ffffff' }} to="/#">Menu</HashLink> </li>
            <li> <HashLink style={{ color: '#ffffff' }} to="/bookings">Reservations</HashLink> </li>
            <li> <HashLink style={{ color: '#ffffff' }} to="/#">Order Online</HashLink> </li>
            <li> <HashLink style={{ color: '#ffffff' }} to="/#">Login</HashLink> </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago,<br />
                Illinois 60602 <br />
                USA
              </address>
            </li>
            <li> <a href="tel:+551199999999" target="_blank" rel="noreferrer">+55 11 9999-9999</a> </li>
            <li> <a href="mailto:contact@littlelemon.com" target="_blank" rel="noreferrer">contact@littlelemon.com</a> </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li> <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noreferrer">Facebook</a> </li>
            <li> <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noreferrer">Instagram</a> </li>
            <li> <a href="https://twitter.com/littlelemon" target="_blank" rel="noreferrer">Twitter</a> </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed by <a href="https://github.com/saffdev" target="_blank" rel="noreferrer"> Sebastian Figueroa </a></span>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;