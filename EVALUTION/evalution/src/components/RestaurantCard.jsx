const RestaurantCard=({data,isAdmin,onDelete,onUpdate})=>{
    return(
        <div>
    <img src={data.image} alt={data.name} width={150}/>
    <h3>{data.name}</h3>
    <p>{data.address}</p>
    <p>{data.type}</p>
    <p>Parking:{data.parking ? "yes" :"no"}</p>
    {isAdmin && (
        <>
        <button onClick={()=>onUpdate(data)}>Update</button>
        <button onClick={()=>onDelete(data.id)}>Delete</button>
        </>
    )}
    </div>
    )
}
export default RestaurantCard;