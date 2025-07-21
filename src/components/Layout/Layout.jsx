import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom"; //Outlet est comme une fenêtre vide.

function Layout(){
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout