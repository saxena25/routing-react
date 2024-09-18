import {useState} from "react";

function Login() {
    let [users, setUsers] = useState([]);
    let [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]:value
        });  
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let obj = {
            id: Math.floor(Date.now() + Math.random()),
            ...data
        }
        setUsers((prevUsers)=>[...prevUsers,obj])
        setData({
            email: "",
            password: "",
        })
    }

   
    return ( 
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Email: <input type="text" name="email" value={data.email} placeholder="Enter Email..." onChange={handleChange} />
                </label>
                <label htmlFor="">
                    Password: <input type="password" name="password" value={data.password} placeholder="Enter Password..." onChange={handleChange} />
                </label>
                <input type="submit" value="Login" />
            </form>
            <div className="users">
                {
                    users.map((user)=>(
                        <div key={user.id}>
                            <h2>Email: {user.email}</h2>
                            <p>Password: {user.password}</p>
                        </div>
                    ))
                }
            </div>
        </>
     );
}

export default Login;