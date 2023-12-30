import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
    const [formdata, setformdata] = useState({ uname: "", passw: "" })
    let navigate = useNavigate();
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        if(localStorage.getItem("login")==true){
            navigate("/")
        }
    })
    
    const handlesubmit = (e) => {
        e.preventDefault();
        if (formdata.uname == "user" && formdata.passw == "abc") {
            localStorage.setItem("login", true);
            navigate("/")
            props.display()
        } else {
            localStorage.setItem("login", false);
            alert('invalid email or password')
            navigate("/login")
        }
        setformdata({ uname: "", passw: "" })
        
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: "#5970ff" }}>Login!!</h1>
            <form action="" onSubmit={handlesubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='uname' value={formdata.uname} onChange={handlechange} id='username' /><br />

                <label htmlFor='password'>Password:</label>
                <input type='password' name='passw' value={formdata.passw} onChange={handlechange} id='password' /><br />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
