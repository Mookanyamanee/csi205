import { Outlet } from "react-router-dom";
import AppHeader from "../component/AppHeader";
import AppNavBar from "../component/AppNavBar";
import AppFooter from "../component/AppFooter";
const AppLayout = ({product, cart, setToken}) => {
    return ( <>
        <AppHeader />
        <AppNavBar product={product} cart={cart} setToken={setToken}/>
        <Outlet  />
        <AppFooter />
    </> );
}
 
export default AppLayout;