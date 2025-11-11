import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import "./product.css"
const Product = ({product, cart, setCart}) => {
    return ( <>
    <div className="product-container">
        <div className="products-items-container">
            {product.map((eachProduct)=>{
                return (
                    <Card style={{ width: '18rem' }} key={eachProduct.id}>
                        <Card.Img variant="top" src={eachProduct.pic} />
                        <Card.Body>
                            <Card.Title>{eachProduct.title}</Card.Title>
                            <Card.Text>${eachProduct.price}
                            </Card.Text>
                            {cart.find((Eachcart)=>eachProduct.id === Eachcart.id) ? 
                            <span className='bg-danger px-2 text-light rounded-2'>added</span> : 
                            <Button variant="outline-primary" onClick={()=>{setCart([...cart, eachProduct])}}>Add To Cart</Button>
                            }
                            
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
        <h4>Items: <Badge className="bg-danger">{cart.length} items </Badge>- Total Price: <Badge className="bg-success">{cart.reduce((prev,now)=>{return prev + now.price}, 0).toFixed(2)}</Badge></h4>
        <Badge className='bg-warning text-black fw-medium fs-5'>Checkout <i className="bi bi-credit-card text-black"></i></Badge>
    </div>
    </>  );
}
 
export default Product;