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
                    {/* Caso normal */}
                    {selected.texto && (
                        <>
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
                        </>
                    )}

                    {/* Caso "Sobre mí" con lista */}
                    {selected.items && (
                        <div className="sobre-mi-grid">
                            {selected.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="mini-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <h2 style={{textAlign:"start",marginLeft:"1rem"}}>{item.titulo}</h2>
                                    <img src={item.imagen} alt={item.texto} className="mini-img" />
                                    <p style={{margin:"1rem"}}>{item.texto}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Card