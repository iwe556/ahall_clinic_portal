import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import DoctorPortal from './pages/DoctorPortal'
import NursePortal from './pages/NursePortal'
import StudentPortal from './pages/StudentPortal'
import Header from './components/Header'


function RequireAuth({ children, allowed }){
const user = JSON.parse(localStorage.getItem('clinic_user') || 'null')
if(!user) return <Navigate to="/login" replace />
if(allowed && !allowed.includes(user.role)) return <Navigate to="/login" replace />
return children
}


export default function App(){
const navigate = useNavigate()


const logout = () => {
localStorage.removeItem('clinic_user')
navigate('/login')
}


const user = JSON.parse(localStorage.getItem('clinic_user') || 'null')


return (
<div className="app-root">
<Header user={user} onLogout={logout} />
<main className="container">
<Routes>
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />


<Route path="/doctor" element={
<RequireAuth allowed={["doctor"]}>
<DoctorPortal />
</RequireAuth>
} />


<Route path="/nurse" element={
<RequireAuth allowed={["nurse"]}>
<NursePortal />
</RequireAuth>
} />


<Route path="/student" element={
<RequireAuth allowed={["student"]}>
<StudentPortal />
</RequireAuth>
} />


<Route path="*" element={<div style={{padding:20}}>Page not found — <a href="/">Go home</a></div>} />
</Routes>
</main>
<footer className="footer">&copy; Clinic Portal — Hackathon demo</footer>
</div>
)
}