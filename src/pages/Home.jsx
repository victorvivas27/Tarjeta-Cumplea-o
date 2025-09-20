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
        imagen_01: "/coco_01.png",
        imagen_02: "/coco_02.png",
        imagen_03: "/coco_03.png",
        imagen_04: "/coco_04.png",
        imagen_05: "/coco_05.png",
        imagen_09: "/coco_09.png",
        imagen_08: "/coco_08.png",

    }

    const detalles = [
        {
            label: "🎉 El cumpleañero",
            texto: `¡Fiesta de ${evento.nombre}!`,
            imagen: evento.imagen_01,
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
            texto: `De ${evento.hora}`,
            imagen: evento.imagen_04,
        },
        {
            label: "📍 El lugar",
            texto: (
                <a
                    href="https://maps.app.goo.gl/RJfFQtPBDW5ungmK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ff5722" }}
                >
                    {evento.lugar}
                </a>
            ),
            imagen: evento.imagen_05,
        },
        {
            label: "🗺️ La dirección",
            texto: (
                <a
                    href="https://maps.app.goo.gl/RJfFQtPBDW5ungmK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ff5722" }}
                >
                    {evento.direccion}
                </a>
            ),
            imagen: evento.imagen_09,
        },
        {
            label: "🏟️ El recinto",
            texto: `${evento.recinto}`,
            imagen: evento.imagen_08,
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
