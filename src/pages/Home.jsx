import { useState } from "react"
import CardList from "../components/cardList/CardLIst"
import Header from "../components/header/Header"


const Home = () => {
    const evento = {
        nombre: "Theo Amiel",
        edad: 6,
        fecha: "Sábado 11 de Octubre",
        hora: "De 13:00 hs a 15:30 hs",
        lugar: "Happy Gol",
        direccion: "Av. Circunvalación las Flores 13.000, Las Condes",
        recinto: "Universidad Católica",
        imagen_12: "/coco_12.png",
        imagen_02: "/coco_02.png",
        imagen_03: "/coco_03.png",
        imagen_04: "/coco_04.png",
        imagen_11: "/coco_11.webp",
        imagen_09: "/coco_09.png",
        imagen_08: "/coco_08.png",

    }

    const detalles = [
        {
            label: "🎉 El cumpleañero",
            texto: `¡Fiesta de ${evento.nombre}!`,
            imagen: evento.imagen_12,
        },
        {
            label: "🎂 Mi edad",
            texto: `Cumplo ${evento.edad} añitos 🥳`,
            imagen: evento.imagen_02,
        },
        {
            label: "🗓️​ La fecha",
            texto: `${evento.fecha}`,
            imagen: evento.imagen_03,
        },
        {
            label: "⏰ El horario",
            texto: evento.hora,
            imagen: evento.imagen_04,
        },
        {
            label: "📍 El lugar",
            texto: (
                <div>
                    <p><strong>{evento.lugar}</strong></p>
                    <p>{evento.direccion}</p>
                    <p>{evento.recinto}</p>
                    <a
                        href="https://maps.app.goo.gl/RJfFQtPBDW5ungmK6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#1a73e8",          // azul estilo Google
                            fontWeight: "600",
                            textDecoration: "none",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                        onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                        📍 Ver en Google Maps
                    </a>
                </div>
            ),
            imagen: evento.imagen_11,
        },
        {
            label: "📸 Unas Fotitos mías",
            texto: "Recuerdos del cumple 🎊",
            imagen: evento.imagen,
        },
    ];

    const [selected, setSelected] = useState(detalles[0])

    return (
        <main>
            <Header detalles={detalles} selected={selected} setSelected={setSelected} />
            <section id="cards">
                <CardList selected={selected} />
            </section>
        </main>
    )
}

export default Home
