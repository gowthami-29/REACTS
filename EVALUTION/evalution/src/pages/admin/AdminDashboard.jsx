import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard"
import AddRestaurantForm from "./components/AddRestaurantForm"
function AdminRestaurant(){
    const [restaurants,setRestaurants]=useState([]);
    const [search,setSearch]=useState("");
    const [type,setType]=useState("");
    const [parking,setParking]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        setRestaurants(JSON.parse(localStorage.getItem("resta"))|| [])

    },[])
    return(
        <div>
            <Navbar search={search}
            setSearch={setSearch}
            setType={setType}
            setParking={setParking}/>
            <AddRestaurantForm addRestaurant={addRestaurant}/>
            {
                filtered.map((r)=>(<RestaurantCard 
                    key={r.id}
                    data={r}
                    isAdmin={true}
                    onDelete={handleDelete}
                    onUpdate={()=>navigate("/admin/restaurants/update",{state:r})}/>
                ))
            }
        </div>
    )

}
export default AdminRestaurant;