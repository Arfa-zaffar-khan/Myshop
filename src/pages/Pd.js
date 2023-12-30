import { useNavigate, useParams } from "react-router-dom"
import { useApi } from "../hooks/useApi";
import { useEffect } from "react";


export default function Pd() {
    const { id } = useParams();
    const { data: product, loading, error } = useApi(`http://localhost:3000/products/${id}`)
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            alert("Product with specify id not exist.")
            navigate("/")
        }
    }, [error])

    return (
        <div>
            {loading ? <div>Loading...</div> : product &&

                < div >
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <strong>{product.price}</strong>
                </div >
            }
        </div>

    )
}
