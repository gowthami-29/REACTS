const Navbar=({search,setSearch,setType,setParking})=>{
    return(
        <div>
            <input placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <select onChange={(e)=>{setType(e.target.value)}}>
            <option>All Types</option>
            <option value=""> Rajastani</option>
            <option value="">gujarati</option>
            <option value="">mughai</option>
            <option value="">thai</option>
            <option value="">northindian</option>
            </select>
            <select onChange={(e)=>setParking(e.target.value)}>
                <option value="" AllParkid></option>
                <option value="true">yes</option>
                <option value="false">no</option>
            </select>
        </div>
    )
}
export default Navbar;