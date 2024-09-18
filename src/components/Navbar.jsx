import { Link } from "react-router-dom";

function Navbar() {
    const links = [
        {
            to:"/",
            name:"Home",
        },
        {
            to:"/login",
            name:"Login",
        },
        {
            to:"/users",
            name:"Users",
        }
    ]
    return ( 
        <>
            <div>
                {
                    links.map((link)=>(
                        <Link key={link.to} to={link.to}>{link.name}</Link>
                    ))
                }
            </div>
        </>
     );
}

export default Navbar;