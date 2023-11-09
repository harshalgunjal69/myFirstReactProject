import React from "react";
import "./main.css";

const Main = () => {
    return (
        <>
        <section id="home">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-4xl font-bold text-white mb-3">Harshal Gunjal</div>
                <div className="text-xl text-white">Full Stack Developer</div>
            </div>
        </section>
        <section id="about" className="h-screen w-screen"></section>
        <section id="portfolio" className="h-screen w-screen"></section>
        <section id="resume" className="h-screen w-screen"></section>
        <section id="contact" className="h-screen w-screen"></section>
        </>
    );
};

export default Main;
