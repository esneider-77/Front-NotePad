import { useEffect } from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Index } from "./components/Index";
import { NewNotePad } from "./components/NewNotePad";
import { UpdateNotePad } from "./components/UpdateNotePad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nuevaNota" element={<NewNotePad />} />
        <Route path="/actualizar/:id" element={<UpdateNotePad />}></Route>
      </Routes>
    </Router>
  );
}

export default App;