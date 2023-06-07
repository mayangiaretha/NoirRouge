import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
          <Link to={`/product/${product._id}`}>
             <Card.Img src={product.image} variant="top" />
          </Link>
          <Card.Body>
              <Link to={`/product/${product._id}`}>
                  <Card.Title as="div">
              <strong>{product.name}</strong>
                  </Card.Title>
              </Link>
              <Card.Text as="h3">
               ${product.price}
              </Card.Text>
          </Card.Body>

        </Card>
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

export default Product;