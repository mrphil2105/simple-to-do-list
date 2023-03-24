import "./Item.css"

export function Item(props) {
    return (
        <div className="item">
            <p>{props.item.name}</p>
            <button onClick={() => props.onDelete(props.item.id)}>Delete</button>
        </div>
    );
}