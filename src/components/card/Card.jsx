"use client"

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react"
import "./Card.css"

const Card = ({ selected }) => {
    return (
        <div className="card">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected.label}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="detalle"
                >
                    <p>{selected.texto}</p>
                    {selected.imagen && (
                        <motion.img
                            src={selected.imagen}
                            alt={selected.label}
                            className="imagen"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Card