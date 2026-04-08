import { useState } from 'react'
export default function Inventory() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({name:'',qty:'',unit:'kg',cost:''})
  const [show, setShow] = useState(false)
  const add = () => {
    if(!form.name) return
    setItems([...items, {...form, id: Date.now()}])
    setForm({name:'',qty:'',unit:'kg',cost:''})
    setShow(false)
  }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{color:'#2d6a4f'}}>Inventory</h2>
        <button onClick={()=>setShow(!show)} style={{background:'#2d6a4f',color:'white',border:'none',borderRadius:'8px',padding:'0.5rem 1rem'}}>+ Add Item</button>
      </div>
      {show && (
        <div style={{background:'#f0faf4',borderRadius:'12px',padding:'1rem',margin:'1rem 0'}}>
          {['name','qty','cost'].map(f => (
            <input key={f} placeholder={f==='cost'?'Cost (RWF)':f.charAt(0).toUpperCase()+f.slice(1)} value={form[f]}
              onChange={e=>setForm({...form,[f]:e.target.value})} type={f==='qty'||f==='cost'?'number':'text'}
              style={{display:'block',width:'100%',margin:'0.5rem 0',padding:'0.5rem',borderRadius:'6px',border:'1px solid #ccc',boxSizing:'border-box'}}/>
          ))}
          <select value={form.unit} onChange={e=>setForm({...form,unit:e.target.value})}
            style={{width:'100%',padding:'0.5rem',borderRadius:'6px',border:'1px solid #ccc'}}>
            {['kg','liters','bags','units'].map(u=><option key={u}>{u}</option>)}
          </select>
          <button onClick={add} style={{marginTop:'0.75rem',background:'#2d6a4f',color:'white',border:'none',borderRadius:'8px',padding:'0.5rem 1rem',width:'100%'}}>Save</button>
        </div>
      )}
      {items.length === 0 ? <p style={{color:'#888'}}>No inventory items yet.</p> :
        items.map(i => (
          <div key={i.id} style={{background:'#fff',border:'1px solid #d4edda',borderRadius:'10px',padding:'0.75rem',marginTop:'0.75rem',display:'flex',justifyContent:'space-between'}}>
            <div><strong>🌾 {i.name}</strong><br/><span style={{fontSize:'0.85rem',color:'#555'}}>{i.qty} {i.unit}</span></div>
            <div style={{color:'#2d6a4f',fontWeight:'bold'}}>{Number(i.cost).toLocaleString()} RWF</div>
          </div>
        ))
      }
    </div>
  )
}
