"use client"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import "./Navbar.css"

const Navbar = ({ detalles, selected, setSelected }) => {
    if (!detalles) return null
    return (
        <nav className="navbar">
            <ul className="nav-links">
                {detalles.map((item) => (
                    <motion.li
                        data-cy="navbar-item"
                        key={item.label}
                        onClick={() => setSelected(item)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`nav-button ${item.label === selected.label ? "active" : ""}`}
                    >
                        {item.label}
                    </motion.li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
