//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from './pages/sobre';
import Home from './Home'

function App() {
  
  return(
    <BrowserRouter>
    <Routes> {/* Aqui está o elemento Routes */}
      <Route index path="/" element={<Home />}></Route>
      <Route path="/Sobre" element={<Sobre />} />
    </Routes>
    </BrowserRouter>
)
}

export default App;
