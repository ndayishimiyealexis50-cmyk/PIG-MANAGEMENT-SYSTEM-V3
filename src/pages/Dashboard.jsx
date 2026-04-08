export default function Dashboard() {
  const stats = [
    { label: 'Total Pigs', value: '0', icon: '🐷' },
    { label: 'Feed Stock (kg)', value: '0', icon: '🌾' },
    { label: 'Revenue (RWF)', value: '0', icon: '💰' },
    { label: 'Active Alerts', value: '0', icon: '⚠️' },
  ]
  return (
    <div>
      <h2 style={{color:'#2d6a4f'}}>Farm Dashboard</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        {stats.map(s => (
          <div key={s.label} style={{background:'#f0faf4',borderRadius:'12px',padding:'1rem',textAlign:'center'}}>
            <div style={{fontSize:'2rem'}}>{s.icon}</div>
            <div style={{fontSize:'1.5rem',fontWeight:'bold',color:'#2d6a4f'}}>{s.value}</div>
            <div style={{fontSize:'0.85rem',color:'#555'}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
