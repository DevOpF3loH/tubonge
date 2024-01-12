import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./contextApi/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <Topbar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/register" element={user ? <Home /> : <Register />} />
    <Route path="/login" element={user ? <Home /> : <Login />} />
    <Route path="/write" element={user ? <Write /> : <Register />} />
    <Route path="/setting" element={user ? <Setting /> : <Register />} />
    <Route path="/post/:postId" element={<Single />} />
    </Routes>
    </Router>
  );
}

export default App;
