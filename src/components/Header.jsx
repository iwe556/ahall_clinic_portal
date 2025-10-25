import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/atlantic-hall-logo.png';



export default function Header({user, onLogout}){
return (
<header className="header">
<div className="logo-placeholder">

<div className="logo-placeholder">
  <img src={logo} alt="Atlantic Hall Logo" style={{height: '60px'}} />
  <div>
    <div className="app-title">School Clinic Portal</div>
    <div className="small">Atlantic Hall</div>
  </div>
</div>

</div>


<div style={{display:'flex',gap:12,alignItems:'center'}}>
{user ? (
<>
<div className="small">Signed in as <strong>{user.role}</strong></div>
<button className="btn secondary" onClick={onLogout}>Logout</button>
</>
) : (
<Link to="/login" className="btn secondary">Login</Link>
)}
</div>
</header>
)
}