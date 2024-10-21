import {useTranslation} from "react-i18next";
import "../styles/Navbar.css"
import {useState} from "react";

function Navbar() {
    const [t] = useTranslation("global");
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <div>
            <div className="nav-container">
                <div className="nav-title">
                    <img src="/public/logo.jpeg" alt=""/>
                </div>

                <nav>
                    <ul className={menuOpen ? "open" : ""}>
                        <li>
                            <a href="/">{t("navbar.home")}</a>
                        </li>

                        <li>
                            <a href="/profile">{t("navbar.profile")}</a>
                        </li>

                        <li>
                            <a href="/publish">{t("navbar.publish")}</a>
                        </li>

                    </ul>
                    <div className="menu" onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;