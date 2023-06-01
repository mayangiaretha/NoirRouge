import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"

const App = () => {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
        <h1>welcome to NoirRouge</h1>
            </Container>
        </main>
</>
    );
};

export default App;
