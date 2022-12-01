import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cart } from "./components/pages/Cart";
import { Catalog } from "./components/pages/Catalog";
import { Home } from "./components/pages/Home";
import { Registro } from "./components/pages/Registro";


export function AppRoutes(){
    
    return(
        
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/catalog" element={<Catalog/>}/>          
            <Route path="/cart" element={<Cart/>} />
            <Route path="/registro" element={<Registro/>} />
            
            </Routes>
             
          
        </Router>
    )     
}