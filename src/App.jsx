import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
    return (
        <>

                <Navbar />


            <main className="d-flex flex-column min-vh-100">
                <Outlet />
            </main>

            <footer className="mt-auto text-center">
                <p>&copy; ReactPortfolio created by AdminChatter</p>
            </footer>
        </>
    );
}

export default App;
