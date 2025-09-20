"use client"

import { motion } from "motion/react"
import "./Navbar.css"

const Navbar = ({ detalles, selected, setSelected }) => {
    if (!detalles) return null
    return (
        <nav className="navbar">
            <h1 className="logo">🎂 Invitación 🎂</h1>
            <ul className="nav-links">
                {detalles.map((item) => (
                    <motion.li
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
