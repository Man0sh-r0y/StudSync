import { Route, Routes } from "react-router-dom";
import CreateStudent from "./pages/CreateStudent";
import UpdateStudent from "./pages/UpdateStudent";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
