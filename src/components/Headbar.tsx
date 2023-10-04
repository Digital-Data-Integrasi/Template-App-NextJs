"use client";
import React, { useState } from "react";
import { FaRegSun, FaUser, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/Neo4j-logo-white.svg"
import Avatar from "./Avatar";


const HeadBar = () => {
    // const { username, setUsername } = useGlobalContext();


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="sticky top-0 bg-slate-950 flex justify-between items-center h-12 p-4">
            <div className="flex items-center">
                <Image src={logo} alt="logo" className="h-8 w-auto" />
                <text className="text-white ml-10">Application xxxyyyy</text>
            </div>
            <div className="flex items-center">
                <Avatar />
                <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={toggleDropdown}

                >
                    <text className="text-white ml-3">ddi@gmail.com</text>
                </button>
                {isDropdownOpen && (
                    <div
                        className="absolute bg-gray-900 w-[9%] mt-2 py-2 rounded shadow-lg"
                        data-dropdown-content="user-dropdown"
                        style={{ top: "100%", right: "5px" }}
                    >
                        <ul className="list-none ml-3 mr-3">
                            <li>
                                <a href="/framework/setting/user" className="flex items-center p-2 text-white rounded-lg  hover:bg-green-700 hover:text-white group space-x-1">
                                    <FaUser />
                                    <h1>Profile</h1>
                                </a>
                            </li>
                            <li>
                                <a href="/framework/setting" className="flex items-center p-2 text-white rounded-lg  hover:bg-green-700 hover:text-white group space-x-1">
                                    <FaRegSun />
                                    <h1>Settings</h1>
                                </a>
                            </li>
                            <li>
                                <a href="/auth/login" className="flex items-center p-2 text-white rounded-lg  hover:bg-green-700 hover:text-white group space-x-1">
                                    <FaSignOutAlt />
                                    <h1>Logout</h1>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    )
};

export default HeadBar;