import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap";
import Ratings from "../components/Ratings/Ratings.jsx";
import products from "../products.js";

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) =>p._id===productId)
    return (
        <>
         <Link className="btn btn-light my-3" to='/'>
             Go Back
         </Link>
            <Row>
                <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Ratings value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                      <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                       <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <Row>
                               <Col>price:</Col>
                               <Col>
                                   <strong>${product.price}</strong>
                               </Col>
                             </Row>
                         </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                   <Col>status:</Col>
                                   <Col>
                                       <strong>{product.countInStock > 0 ? "In stock" : "out of stock"}</strong>
                                   </Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Button className="btn-block" type='button' disabled={product.countInStock === 0}>
                                   Add To Cart
                               </Button>
                           </ListGroup.Item>
                       </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;