import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h2>Welcome to homepage</h2>
            <Link to="/login">Go to login Page</Link>
        </div>
    )
}
export default Home;  