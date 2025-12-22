import { Link } from "react-router-dom";

function Home(){
    
  return(
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/todos">Todos</Link>
       
      </nav>
    <h2>This is Home Page</h2>    
    </div>
    
  )

}
export default Home;