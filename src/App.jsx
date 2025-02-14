import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { EventsProvider } from "./context/EventsContext"
import { AuthProvider } from "./context/AuthContext"

import Events from "./pages/Events"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

import TopNav from './components/TopNav'

import './app.css'

function App() {

  return (
    <div className="app">
      <AuthProvider>
        <EventsProvider>
          <BrowserRouter>
            <TopNav />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Events />} />
                <Route path="events" element={<Navigate to="/" replace />} />
                <Route path="login" element={<Login />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </div>
          </BrowserRouter>
        </EventsProvider>
      </AuthProvider>
    </div>
  )
}

export default App
