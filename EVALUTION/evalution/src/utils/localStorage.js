export const getRestaurants=()=>
    JSON.parse(localStorage.getItem("restaurant"))||[];
    export const saveRestaurants=(data)=>localStorage.setItem("restaurants",JSON.stringify(data))
