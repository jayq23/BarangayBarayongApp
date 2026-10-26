
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './auth/login'
import Register from './auth/register'
import Dashboard from './userInterface/userDashboard'
import UserProfile from './userInterface/userProfile'
import UserRequest from './userInterface/userRequest'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/requests" element={<UserRequest />} />
      <Route path="/requests/new" element={<UserRequest />} />
    </Routes>
  )
}

export default App