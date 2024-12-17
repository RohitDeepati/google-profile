import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GDrive } from "./components/GDriveComponent/Gdrive";
import { Home } from "./components/pages/home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gdrive" element={<GDrive />} />
      </Routes>
    </Router>

  )
}

export default App
