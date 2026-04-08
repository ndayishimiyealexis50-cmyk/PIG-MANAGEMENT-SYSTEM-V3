export default function Reports() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun']
  return (
    <div>
      <h2 style={{color:'#2d6a4f'}}>Reports</h2>
      <div style={{background:'#f0faf4',borderRadius:'12px',padding:'1rem',marginBottom:'1rem'}}>
        <h3 style={{margin:'0 0 0.5rem',color:'#2d6a4f'}}>Monthly Summary</h3>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
          <thead>
            <tr style={{background:'#2d6a4f',color:'white'}}>
              <th style={{padding:'0.5rem',textAlign:'left'}}>Month</th>
              <th style={{padding:'0.5rem'}}>Pigs Sold</th>
              <th style={{padding:'0.5rem'}}>Revenue (RWF)</th>
            </tr>
          </thead>
          <tbody>
            {months.map((m,i) => (
              <tr key={m} style={{background:i%2===0?'white':'#f9f9f9'}}>
                <td style={{padding:'0.5rem'}}>{m}</td>
                <td style={{padding:'0.5rem',textAlign:'center'}}>—</td>
                <td style={{padding:'0.5rem',textAlign:'center'}}>—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{color:'#888',fontSize:'0.85rem'}}>Data will populate as you add pigs and sales.</p>
    </div>
  )
}
