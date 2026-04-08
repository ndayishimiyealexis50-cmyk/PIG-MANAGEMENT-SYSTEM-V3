import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav style={{background:'#2d6a4f',padding:'1rem',display:'flex',gap:'1rem'}}>
      <Link to="/" style={{color:'white',textDecoration:'none'}}>Dashboard</Link>
      <Link to="/piggery" style={{color:'white',textDecoration:'none'}}>Piggery</Link>
      <Link to="/inventory" style={{color:'white',textDecoration:'none'}}>Inventory</Link>
      <Link to="/reports" style={{color:'white',textDecoration:'none'}}>Reports</Link>
      <Link to="/settings" style={{color:'white',textDecoration:'none'}}>Settings</Link>
    </nav>
  )
}
