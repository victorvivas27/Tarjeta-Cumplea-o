import Card from "../card/Card"
import "./CardList.css"

const CardList = ({ selected }) => {
    return (
        <div className="card-list">
            <Card selected={selected} />
        </div>
    )
}

export default CardList
