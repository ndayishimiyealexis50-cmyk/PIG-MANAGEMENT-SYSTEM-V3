import { useState } from 'react'
export default function Piggery() {
  const [pigs, setPigs] = useState([])
  const [form, setForm] = useState({tag:'',breed:'',weight:'',status:'Growing'})
  const [show, setShow] = useState(false)
  const add = () => {
    if(!form.tag) return
    setPigs([...pigs, {...form, id: Date.now()}])
    setForm({tag:'',breed:'',weight:'',status:'Growing'})
    setShow(false)
  }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{color:'#2d6a4f'}}>Piggery</h2>
        <button onClick={()=>setShow(!show)} style={{background:'#2d6a4f',color:'white',border:'none',borderRadius:'8px',padding:'0.5rem 1rem'}}>+ Add Pig</button>
      </div>
      {show && (
        <div style={{background:'#f0faf4',borderRadius:'12px',padding:'1rem',margin:'1rem 0'}}>
          {['tag','breed','weight'].map(f => (
            <input key={f} placeholder={f.charAt(0).toUpperCase()+f.slice(1)} value={form[f]}
              onChange={e=>setForm({...form,[f]:e.target.value})}
              style={{display:'block',width:'100%',margin:'0.5rem 0',padding:'0.5rem',borderRadius:'6px',border:'1px solid #ccc',boxSizing:'border-box'}}/>
          ))}
          <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}
            style={{width:'100%',padding:'0.5rem',borderRadius:'6px',border:'1px solid #ccc'}}>
            {['Growing','Breeding','For Sale','Sick'].map(s=><option key={s}>{s}</option>)}
          </select>
          <button onClick={add} style={{marginTop:'0.75rem',background:'#2d6a4f',color:'white',border:'none',borderRadius:'8px',padding:'0.5rem 1rem',width:'100%'}}>Save</button>
        </div>
      )}
      {pigs.length === 0 ? <p style={{color:'#888'}}>No pigs added yet.</p> :
        pigs.map(p => (
          <div key={p.id} style={{background:'#fff',border:'1px solid #d4edda',borderRadius:'10px',padding:'0.75rem',marginTop:'0.75rem'}}>
            <strong>🐷 {p.tag}</strong> — {p.breed}<br/>
            <span style={{fontSize:'0.85rem',color:'#555'}}>{p.weight}kg · {p.status}</span>
          </div>
        ))
      }
    </div>
  )
}
