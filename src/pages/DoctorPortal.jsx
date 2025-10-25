import React from 'react'


export default function DoctorPortal(){
return (
<div className="container">
<div className="card">
<h2>Doctor Dashboard</h2>
<p className="small">Placeholder portal for doctors. Add real data-binding in your implementation.</p>


<div className="dashboard-grid" style={{marginTop:14}}>
<div className="card">
<h3>Today's Appointments</h3>
<div className="small" style={{marginTop:8}}>No real data — this is a placeholder list.</div>
<div style={{marginTop:12}}>
<div className="kv"><div>John Doe (S123)</div><div className="small">09:00</div></div>
<div className="kv"><div>Jane Smith (S456)</div><div className="small">09:20</div></div>
</div>
</div>


<div className="card">
<h3>View Records</h3>
<p className="small">Search and view student medical records (placeholder).</p>
<div style={{marginTop:12}}>
<input className="input" placeholder="Search by admission no / name" />
</div>
</div>


<div className="card">
<h3>Add Consultation</h3>
<p className="small">Quick form to add consultation notes and prescription (placeholder).</p>
<div style={{marginTop:12}}>
<textarea className="input" rows={4} placeholder="Symptoms / diagnosis / prescription" />
<div style={{marginTop:8,display:'flex',gap:8}}>
<button className="btn">Save</button>
<button className="btn secondary">Generate Slip</button>
</div>
</div>
</div>
</div>
</div>
</div>
)
}