import { useState } from "react";

export function Well() {
    const [person, setPerson] = useState([]);

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc" }}>
            <h1>Person List</h1>
            <p>This is a simple application that adds names to the list.</p>

            <button 
                onClick={() => {
                    setPerson([...person, "IMISSYOU"]);
                }}
                style={{ padding: "10px", marginBottom: "20px" }}
            >
                CLICK ME
            </button>

            <ul>
                {person.map((item, index) => (
                    <li key={index} style={{ margin: "5px 0", listStyleType: "none" }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
