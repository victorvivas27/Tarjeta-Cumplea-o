import "./Footer.css"
const icon_victor = "Logo_Victor.svg"
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wa-buttons">
                <a
                    href="https://wa.me/+56986348085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-link"
                >
                    <FaWhatsapp className="wa-icon" /> Papá
                </a>
                <a
                    href="https://wa.me/+56986517033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-link"
                >
                    <FaWhatsapp className="wa-icon" /> Mamá
                </a>
            </div>
            <p>© 2025 Invitación Familiar · Hecho con ❤️</p>

            <img src={icon_victor} alt="Logo Victor" className="logo-footer" />


        </footer>
    );
};

export default Footer;