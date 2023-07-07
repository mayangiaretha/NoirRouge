import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Product from "../components/Product/product.jsx";
import {useGetProductsQuery} from "../slices/productsApi.js";
import Loader from "../components/Loader/Loader.jsx";
import Message from "../components/Message/Message.jsx";

const HomeScreen = () => {
    const{data: products, isLoading, error } = useGetProductsQuery()
    return (
        <>
            {isLoading ? <Loader/> : error ? <Message variant="danger">{error?.data?.message || error.error}</Message> : (<>
                    <h1>Latest Products</h1>
                <Row>
            {products.map((product) =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
                ))}
                </Row>
                    </>
                ) }

            
        </>
    );
};
Product.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default HomeScreen;