
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Container, Content, Image } from "./styles";
import restaurant_food from "../../images/restauranfood.jpg";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
      </Content>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;