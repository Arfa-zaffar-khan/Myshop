import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate=useNavigate()
  return (
    <div>
        <h2>404 Not Found</h2>
        <p>The requested resource could not be found.</p>
        <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}
