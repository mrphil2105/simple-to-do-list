import "./Input.css"
import { useState } from "react";

export function Input(props) {
    const [name, setName] = useState("");

    function handleAdd() {
        if (!name) {
            return;
        }

        props.onAdd(name);
        setName("");
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
            handleAdd();
        }
    }

    return (
        <div className="input">
            <input value={name} onKeyDown={handleKeyDown} onChange={e => setName(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}