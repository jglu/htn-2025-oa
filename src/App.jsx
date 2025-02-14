import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <HashRouter>
            <TopNav />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Events />} />
                <Route path="events" element={<Navigate to="/" replace />} />
                <Route path="login" element={<Login />} />
                <Route path="/404" element={<NotFound />} />
              </Routes>
            </div>
          </HashRouter>
        </EventsProvider>
      </AuthProvider>
    </div>
  )
}

export default App
