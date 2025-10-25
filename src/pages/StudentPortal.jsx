import React from 'react'


export default function StudentPortal(){
const user = JSON.parse(localStorage.getItem('clinic_user') || 'null')
return (
<div className="container">
<div className="card">
<h2>Student Portal</h2>
<p className="small">Welcome {user?.username ?? 'Student'}. View your visit history and prescriptions.</p>


<div className="dashboard-grid" style={{marginTop:14}}>
<div className="card">
<h3>My Visit History</h3>
<div className="small" style={{marginTop:8}}>No real data yet — this will show past visits and notes.</div>
<div style={{marginTop:12}}>
<div className="kv"><div>10 Oct 2025 — Fever</div><div className="small">Prescribed: Paracetamol</div></div>
</div>
</div>


<div className="card">
<h3>My Prescriptions</h3>
<div className="small" style={{marginTop:8}}>Printable slip / QR will appear here when a doctor issues a prescription.</div>
<div style={{marginTop:12}}>
<button className="btn">Request Refill (placeholder)</button>
</div>
</div>


<div className="card">
<h3>Request Appointment</h3>
<textarea className="input" rows={3} placeholder="Reason for appointment" />
<div style={{marginTop:8}}><button className="btn">Send Request</button></div>
</div>
</div>
</div>
</div>
)
}