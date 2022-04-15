import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import { Notes, Search,Labels, Trash, Archive, Profile } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Home />}>
          <Route path="/home" element={<><Search/><Notes/></>}/>
          <Route path="/Labels/:labelName" element={<Labels />} />
          <Route path="/Trash" element={<Trash />} />
          <Route path="/Archive" element={<Archive />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
