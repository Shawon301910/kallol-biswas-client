import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";


const MainLayout = () => {

    return (
        <div className="font-poppins max-w-screen-2xl mx-auto bg-ebony overflow-hidden">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;