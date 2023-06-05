import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";

const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
        <HomeScreen/>
            </Container>
        </main>
            <Footer/>
</>
    );
};

export default App;
