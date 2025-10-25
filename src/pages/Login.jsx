import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const CREDENTIALS = [
{ username: 'doctor', password: 'doctor', role: 'doctor' },
{ username: 'nurse', password: 'nurse', role: 'nurse' },
{ username: 'student', password: 'student', role: 'student' }
]


export default function Login(){
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [err,setErr] = useState('')
const navigate = useNavigate()


function handleSubmit(e){
e.preventDefault()
const found = CREDENTIALS.find(c => c.username === username && c.password === password)
if(!found){ setErr('Invalid credentials — try doctor/doctor, nurse/nurse, or student/student'); return }


const user = {username: found.username, role: found.role}
localStorage.setItem('clinic_user', JSON.stringify(user))
setErr('')


if(found.role === 'doctor') navigate('/doctor')
else if(found.role === 'nurse') navigate('/nurse')
else navigate('/student')
}


return (
<div className="container">
<div className="card" style={{maxWidth:720,margin:'0 auto'}}>
<h2 style={{marginTop:0}}>Welcome — Clinic Portal Demo</h2>
<p className="small">Use the provided test accounts to demo role-based dashboards. Logo placeholder at top-left.</p>


<form onSubmit={handleSubmit} style={{marginTop:12}}>
<div className="form-row">
<input className="input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="username" />
<input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
</div>
{err && <div style={{color:'crimson',marginBottom:10}}>{err}</div>}
<div style={{display:'flex',gap:12}}>
<button className="btn">Login</button>
<button type="button" className="btn secondary" onClick={()=>{setUsername('');setPassword('')}}>Clear</button>
</div>


<div style={{marginTop:12}} className="small">
<strong>Test logins:</strong> doctor/doctor · nurse/nurse · student/student
</div>
</form>
</div>
</div>
)
}