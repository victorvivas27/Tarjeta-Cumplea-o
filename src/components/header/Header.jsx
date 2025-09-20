
import Navbar from "../navbar/Navbar";
import "./Header.css";
const imagen_header = "/coco_header_01.png";

const Header = ({ detalles, selected, setSelected }) => {
    return (
        <header className="header">
            <img src={imagen_header} alt="logo" className="logo-header" />
            <Navbar
                detalles={detalles}
                selected={selected}
                setSelected={setSelected}
            />

        </header>
    );
};

export default Header;