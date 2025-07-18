import Header from "../Header/Header";
import { Outlet } from "react-router-dom"; //Outlet est comme une fenêtre vide.

function Layout(){
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout