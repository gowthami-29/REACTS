
import { Link } from "react-router-dom";
function About(){
    return (
        
        <div>
            <nav>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/todos">Todos</Link>
      
         </nav>
            <h2>This is About Us Page</h2>
    </div>
        
    )

}
export default About;