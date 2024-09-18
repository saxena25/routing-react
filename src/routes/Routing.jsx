import {Routes,Route} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Users from "../components/Users";

function Routing() {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </>
     );
}

export default Routing;