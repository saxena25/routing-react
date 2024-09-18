import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <h1>Home page</h1>
            <div>
                <button onClick={()=>navigate("/login")}>Go to Login Page</button>
                <button onClick={()=>navigate("/users")}>Go to Users Page</button>
            </div>
        </>
     );
}

export default Home;