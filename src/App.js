import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Read from "./Pages/Read";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = ()=>{
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/create" element={<Create />}/>
                <Route path="/read" element={<Read />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;