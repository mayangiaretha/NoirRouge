import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";



const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    < Outlet />
            </Container>
        </main>
            <Footer/>
</>
    );
};

export default App;
