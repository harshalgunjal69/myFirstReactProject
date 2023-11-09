import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";

const Header = () => {
    return (
        <>
            <div className="navbar translucent fixed top-3 w-[95%] flex justify-between">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <GiHamburgerMenu color="#fff" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-900 rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Portfolio</a>
                            </li>
                            <li>
                                <a>Resume</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="cursor-pointer h-12 px-6 min-h-12 leading-4 gap-2 font-semibold normal-case text-xl text-white inline-flex flex-shrink-0 justify-center items-center">
                        Harshal Gunjal
                    </a>
                    <div className="navbar-center hidden lg:flex hover-effect">
                        <ul className="flex px-1 text-lg">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#resume">Resume</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="form-control hidden xl:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto translucent text-center"
                        />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <ImSearch color="#fff" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
