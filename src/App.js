import { useState } from "react";
import { Item } from "./Item";
import { Input } from "./Input";

function App() {
    const [items, setItems] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    function handleAdd(name) {
        const item = {
            id: idCounter + 1,
            name // same as 'name: name'
        };
        setIdCounter(idCounter + 1)
        setItems([...items, item]);
    }

    function handleDelete(id) {
        const newItems = items.filter(i => i.id !== id);
        setItems(newItems);
    }

    return (
        <>
            <Input onAdd={handleAdd} />
            {items.map(i => (
                <Item key={i.id} item={i} onDelete={handleDelete} />
            ))}
        </>
    );
}

export default App;
