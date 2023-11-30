import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Test from "./pages/Test";
import './App.css';
import { Auth0ProviderWithNavigate } from "./scripts/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Landing/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="test" element={<Test/>}/>
          </Route>
        </Routes>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}

export default App;
