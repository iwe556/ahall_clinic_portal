import React from 'react'


export default function NursePortal(){
return (
<div className="container">
<div className="card">
<h2>Nurse Dashboard</h2>
<p className="small">Nurse features: triage, record vitals, dispense meds.</p>


<div className="dashboard-grid" style={{marginTop:14}}>
<div className="card">
<h3>Search Student File</h3>
<input className="input" placeholder="Admission no / name" />
<div className="small" style={{marginTop:8}}>Click a result to open the student file (placeholder)</div>
</div>


<div className="card">
<h3>Record Vitals</h3>
<div style={{marginTop:8}}>
<div className="form-row"><input className="input" placeholder="Temp (°C)" /><input className="input" placeholder="Pulse" /></div>
<textarea className="input" rows={3} placeholder="Triage notes" style={{marginTop:8}} />
<div style={{marginTop:8}}><button className="btn">Save & Send to Doctor</button></div>
</div>
</div>


<div className="card">
<h3>Dispense Meds</h3>
<div className="small" style={{marginTop:8}}>Scan prescription QR or enter code manually (placeholder)</div>
<div style={{marginTop:12}}>
<input className="input" placeholder="Prescription code / QR" />
<div style={{marginTop:8}}><button className="btn">Validate & Dispense</button></div>
</div>
</div>
</div>
</div>
</div>
)
}