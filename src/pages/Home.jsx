import { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import CardList from "../components/cardList/CardLIst"


const Home = () => {
    const evento = {
        nombre: "Theo Amiel",
        edad: 6,
        fecha: "Sábado 11 de Octubre",
        hora: "13:00 - 15:30",
        lugar: "Happy Gol",
        direccion: "Av. Circunvalación las Flores 13.000, Las Condes",
        recinto: "Universidad Católica",
        imagen_01: "/coco_01.png",
        imagen_02: "/coco_02.png",
        imagen_03: "/coco_03.png",
    }

    const detalles = [
        {
            label: "Quien es",
            texto: `🎉 Cumpleaños de ${evento.nombre} 🎉`,
            imagen: evento.imagen_01
        },
        {
            label: "Cuantos Años",
            texto: `🎂 Cumplo ${evento.edad} años`,
            imagen: evento.imagen_02
        },
        {
            label: "Que fecha lo realizo",
            texto: `📅 ${evento.fecha}`,
            imagen: evento.imagen_03
        },
        {
            label: "Hora te espero",
            texto: `🕐 ${evento.hora}`,
            imagen: null
        },
        {
            label: "Lugar del evento",
            texto: `📍 ${evento.lugar}`,
            imagen: null
        },
        {
            label: "Dirección asi no te pierdes",
            texto: evento.direccion,
            imagen: null
        },
        {
            label: "Recinto de la fiesta",
            texto: evento.recinto,
            imagen: null
        },
        {
            label: "Fotos",
            texto: "📸 Recuerdos del cumple",
            imagen: evento.imagen
        },
    ]

    const [selected, setSelected] = useState(detalles[0])

    return (
        <main>
            {/* Navbar con botones */}
            <Navbar detalles={detalles} selected={selected} setSelected={setSelected} />

            {/* CardList que recibe el detalle activo */}
            <section id="cards">
                <CardList selected={selected} />
            </section>
        </main>
    )
}

export default Home
