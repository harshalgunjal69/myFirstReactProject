import React from "react";
import "./index.css";
import { Header, Main, Footer } from "./containers";

function App() {
    return (
        <>
            <div className="bg_gradient flex flex-col items-center">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default App;
