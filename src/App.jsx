import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { EventsProvider } from "./context/EventsContext"

import Events from "./pages/Events"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <EventsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="events" element={<Navigate to="/" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </EventsProvider>
  )
}

export default App
