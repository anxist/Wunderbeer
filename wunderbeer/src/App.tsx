import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Destrib from './pages/Destrib';
import Complictation from './pages/Complictation';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/destrub" element={<Destrib />} />
                <Route path="/complictation" element={<Complictation />} />
            </Routes>
        </Router>
    );
};

export default App; // Ensure App is exported as default