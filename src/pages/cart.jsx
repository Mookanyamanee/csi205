import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./product.css"

import { Badge } from 'react-bootstrap';
const Cart = ({ cart, setCart }) => {
    return (
        <>
            <div className="product-container">
                <div className="products-items-container">
                    {cart.map((eachCart) => {
                        return (
                            <Card style={{ width: '18rem' }} key={eachCart.id}>
                                <Card.Img variant="top" src={eachCart.pic} />
                                <Card.Body>
                                    <Card.Title>{eachCart.title}</Card.Title>
                                    <Card.Text>${eachCart.price}
                                    </Card.Text>
                                    <Button variant="outline-danger" onClick={() => setCart(cart.filter((c) => c.id !== eachCart.id))}>Remove from cart</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
                <h4>Items: <Badge className="bg-danger">{cart.length} items </Badge>- Total Price: <Badge className="bg-success">{cart.reduce((prev, now) => { return prev + now.price }, 0).toFixed(2)}</Badge></h4>
                <Badge className='bg-warning text-black fw-medium fs-5'>Checkout <i className="bi bi-credit-card text-black"></i></Badge>

            </div>
        </>);
}

export default Cart;