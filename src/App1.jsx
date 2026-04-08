import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import DashboardPage from './components/DashboardPage.jsx'
import PigsPage from './components/PigsPage.jsx'
import FeedLog from './components/FeedLog.jsx'
import DailyLog from './components/DailyLog.jsx'
import Reproduction from './components/Reproduction.jsx'
import Finance from './components/Finance.jsx'
import Ledger from './components/Ledger.jsx'
import CapitalManagement from './components/CapitalManagement.jsx'
import SaleLog from './components/SaleLog.jsx'
import ProfitLossPage from './components/ProfitLossPage.jsx'
import RwandaMarketPage from './components/RwandaMarketPage.jsx'
import SmartAlertsPage from './components/SmartAlertsPage.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import BusinessProfile from './components/BusinessProfile.jsx'
import LoginPage from './components/LoginPage.jsx'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main style={{ padding: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pigs" element={<PigsPage />} />
          <Route path="/feed" element={<FeedLog />} />
          <Route path="/daily-log" element={<DailyLog />} />
          <Route path="/reproduction" element={<Reproduction />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/capital" element={<CapitalManagement />} />
          <Route path="/sales" element={<SaleLog />} />
          <Route path="/profit-loss" element={<ProfitLossPage />} />
          <Route path="/market" element={<RwandaMarketPage />} />
          <Route path="/alerts" element={<SmartAlertsPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<BusinessProfile />} />
        </Routes>
      </main>
    </div>
  )
}
