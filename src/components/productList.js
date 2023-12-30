import { useState, useEffect } from "react"
import "./productStyle.css"
import { useApi } from "../hooks/useApi"
import { Link } from "react-router-dom"

export default function ProductList() {
    const[url, setUrl]=useState("http://localhost:3000/products")
    const {data:products,loading}= useApi(url)


    
  


    return (
        <div className="product-list"> 
        <div className="filters">
            <button onClick={()=>{setUrl("http://localhost:3000/products")}}>All</button>
            <button onClick={()=>{setUrl("http://localhost:3000/products?category=mobile")}}>Mobile</button>
            <button onClick={()=>{setUrl("http://localhost:3000/products?category=tv")}}>Tv</button>
            <button onClick={()=>{setUrl("http://localhost:3000/products?category=washing-machine")}}>Washing Machine</button>
        </div>
        
            {/* {loading && <div>Loading....</div> } */}
       
            <ul>
            
                {loading? <div>Loading....</div>:products && products.map(product =>(
                    <li>
                        <h3>{product.name}</h3>
                        <p>{product.description.slice(0, 20)+"...."}</p>
                        <strong>{product.price}</strong>
                        <p>
                            <Link to={`/products/${product.id}`}>Read More</Link>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

