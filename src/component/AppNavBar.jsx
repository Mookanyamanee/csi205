import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useState } from "react"
const AppNavBar = ({ product, cart, setToken }) => {
    const [currentMenu, setCurrentMenu] = useState("home")
    return (

        <div className="d-flex justify-content-center gap-2">
            <Link to={'/home'}>
                <Button variant={currentMenu === "home" ? "primary" : "outline-primary"} onClick={() => setCurrentMenu("home")}>Home
                </Button></Link>
            <Link to={'calculator'}>
                <Button variant={currentMenu === "calculator" ? "primary" : "outline-primary"} onClick={() => setCurrentMenu("calculator")}>Calculator
                </Button></Link>
            <Link to={'animation'}>
                <Button variant={currentMenu === "Animation" ? "primary" : "outline-primary"} onClick={() => setCurrentMenu("Animation")}>Animation
                </Button></Link>
            <Link to={'components'}>
                <Button variant={currentMenu === "Components" ? "primary" : "outline-primary"} onClick={() => setCurrentMenu("Components")}>Components
                </Button></Link>
            <Link to={'todos'}>
                <Button variant={currentMenu === "Todos" ? "primary" : "outline-primary"} onClick={() => setCurrentMenu("Todos")}>Todos
                </Button></Link>
            <Link to={'product'}>
                <Button variant={currentMenu === "Product" ? "primary" : "outline-primary"} onClick={() => setCurrentMenu("Product")}>Product({product.length})
                </Button></Link>
            <Link to={'cart'}>
                <Button variant={currentMenu === "Cart" ? "primary" : "outline-primary"} className="position-relative" onClick={() => setCurrentMenu("Cart")}>
                    Cart
                    {
                        cart.length > 0 ? (<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length > 9 ? "9+" : cart.length}
                            <span class="visually-hidden">unread messages</span>
                        </span>) : null
                    }

                </Button></Link>
            <Link to={''}>
                <Button variant="outline-danger" style={{marginLeft:'1rem'}} onClick={() => {setToken('')}}>Logout
                </Button></Link>
        </div>);
}

export default AppNavBar;