import { Navigate } from "react-router-dom";

function Protected({children}){
    const islogged=localStorage.getItem("islogged")
    if(!islogged){
        return <Navigate to="/login"></Navigate>
    }
    return children
}
export default Protected;