import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/admin/AdminDashboard"
import Login from "./pages/Login"
import UpdateRestaurant from "./pages/admin/UpdateRestaurant"
import CustomerDashboard from "./pages/customer/CustomerDahboard"
const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard/></ProtectedRoute>}/>
      <Route path="/admin/restaurants/update" element={<ProtectedRoute><CustomerDashboard/></ProtectedRoute>}/>
      <Route path="/customers/dashboard" element={<ProtectedRoute role="customer"><UpdateRestaurant/></ProtectedRoute>}/>
    </Routes>
  )
}
export default App;