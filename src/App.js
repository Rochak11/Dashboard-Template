import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userid" element={<Single/>} />
              <Route path="new" element={<New/>} />
          </Route>
          <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productid" element={<Single/>} />
              <Route path="new" element={<New/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
