import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
    return (
    <>
        <header className="position-fixed top-0 start-0 w-100">
            <Navbar />
        </header>

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
