

import "./Footer.css"

const icon_victor = "Logo_Victor.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Invitaciones Familiares · Hecho con ❤️</p>
            <img src={icon_victor} alt="Logo Victor" className="logo-footer" />
        </footer>
    )
}
export default Footer