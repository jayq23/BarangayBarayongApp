
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './auth/login'
import Register from './auth/register'
import Dashboard from './userInterface/userDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App