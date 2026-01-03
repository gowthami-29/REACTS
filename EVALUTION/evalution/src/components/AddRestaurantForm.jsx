const { useState } = require("react")

const AddReestaurantForm=({refresh})=>{
    const [form,setForm]=useState({
        name:"",
        address:"",
        type:"",
        image:"",
        parking:false
    })
    const handleSubmit=()=>{
        if(!form.name || !form.address ||!form.type){
            alert("Fill all the fields")
            return
        }
        const restaurants=getRestaurants();
        const newRestaurant={...form,id:Date.now()}
        saveRestaurants([...restaurants,newRestaurant])
        alert("Restaurant Added")
        refresh();
    }
    return(
        <div>
            <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
            <input placeholder="Address" onChange={(e)=>setForm({...form,address:e.target.value})} />
            <select onChange={(e)=>setForm(e.target.value)}>
                <option value="">Select Type</option>
                <option>Rajastani</option>
                <option>Gujarati</option>
                <option>Mughalai</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>North Indian</option>

            </select>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}
export default AddReestaurantForm;