import CallToAction from "../CallToAction/CallToAction";
import Chicago from "../Chicago/Chicago";
import CustomersSay from "../CustomersSay/CustomersSay";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Specials from "../Specials/Specials";
import { Container } from "./styles";



const Home = () => {
    return (
        <Container>
            <Header />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Footer />
        </Container>
    );
};

export default Home;