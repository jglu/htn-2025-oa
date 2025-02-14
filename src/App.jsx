import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

import Events from "./pages/Events"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="events" element={<Navigate to="/" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
