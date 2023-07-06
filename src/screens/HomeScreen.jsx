import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Product from "../components/Product/product.jsx";
import {useGetProductsQuery} from "../slices/productsApi.js";

const HomeScreen = () => {
    const{data: products, isLoading, error } = useGetProductsQuery()
    return (
        <>
            {isLoading ? (<h2>Loading...</h2>) : error ? <div>{error?.data?.message || error.error}</div> : (<>
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