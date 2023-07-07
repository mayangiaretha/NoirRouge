import { useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useDispatch} from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button,Form} from "react-bootstrap";
import Ratings from "../components/Ratings/Ratings.jsx";
import {useGetProductDetailsQuery} from "../slices/productsApi.js";
import Loader from "../components/Loader/Loader.jsx";
import Message from "../components/Message/Message.jsx";
import {addToCart} from "../slices/cartSlice.js";


const ProductScreen = () => {
    const { id: productId } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [qty, setQty] = useState(1)

    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)

    const addToCartHandler = () =>{
     dispatch(addToCart({...product, qty}))
        navigate('/cart')
    }


    return (
        <>
         <Link className="btn btn-light my-3" to='/'>
             Go Back
         </Link>
            {isLoading ? <Loader/> : error ? <Message variant="danger">(error?.data?.message || error.error)</Message> : (
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
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control as="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}</Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button className="btn-block" type='button' disabled={product.countInStock === 0} onClick={addToCartHandler}>
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}

        </>
    );
};

export default ProductScreen;