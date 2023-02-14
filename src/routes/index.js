import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Info1 from "../pages/information/Info1.jsx";
import Info2 from "../pages/information/Info2.jsx";
import Info3 from "../pages/information/Info3.jsx";
import Info4 from "../pages/information/Info4.jsx";
import Info5 from "../pages/information/Info5.jsx";
import Info7 from "../pages/information/Info7.jsx";
const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/instruction' element={<Info1/>} />
                <Route path='/instruction1' element={<Info2/>} />
                <Route path='/instruction2' element={<Info3/>} />
                <Route path='/instruction3' element={<Info4/>} />
                <Route path='/instruction4' element={<Info5/>} />
                <Route path='/instruction5' element={<Info7/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;