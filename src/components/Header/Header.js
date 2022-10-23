import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {

    return (
        <header className="header" >
            <div className="header__logo" >
                <Link to="/" className="nav__link"  >
                    <div className="logo" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path 
                                d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
            <div className="nav__item" >
                <Link to="/cart" className="nav__link" >
                    <div className="nav__link__content" >
                        <img src="data:image/png;base64,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" />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header;