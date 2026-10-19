
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './auth/login'
import Register from './auth/register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App