import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    let [data,setData] = useState([]);

    const DisplayUsers = async() =>{
        try {
            let res = await axios.get('https://reqres.in/api/users');
            // console.log(res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.log(`error while fetching data ${error}`);  
        }
    }

    useEffect(()=>{
        DisplayUsers()
    },[])


    return ( 
        <>
            <h1>Users page</h1>
            <div className="all-users">
                {
                    data.map((user)=>(
                        <div key={user.id}>
                            <img src={user.avatar} alt="user" />
                            <p>ID: {user.id}</p>
                            <h2>Name: {user.first_name} {user.last_name}</h2>
                            <p>Email: {user.email}</p>
                        </div>
                    ))
                }
            </div>
        </>
     );
}

export default Users;