import { useState } from "react";
import "../styles/Module.Header.css"

const Header = () => {

    const [optionsIsVisible, setOptionsIsVisible] = useState(false);
    const [optionsClass, setoptionsClass] = useState("options-hidden");

    const toggleOptionsVisibility = () => {
        setOptionsIsVisible(!optionsIsVisible);
        setoptionsClass(optionsIsVisible ? "options-hidden" : "options-visible");
    }

    return (
        <div className="header">
            <div className="dropdown"
                onClick={toggleOptionsVisibility}
            >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path></svg>

                &nbsp;&nbsp;Display&nbsp;&nbsp;

                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></div>

            <div className={`${optionsClass}`}>
                <div className="select-section">
                    <p>Grouping</p>
                    <select className="select" title="grouping-select" name="grouping-select" id="grouping-select">
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>

                <div className="select-section">
                    <p>Ordering</p>
                    <select className="select" title="ordering-select" name="ordering-select" id="ordering-select">
                        <option value="priority">Priority</option>
                        <option value="title" selected>Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Header;