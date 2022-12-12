import { useState } from "react";

export default function FormCheckOut(props) {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function onInputChange(e) {
        let nameInput = e.target.name;
        let value = e.target.value;

        // dynamic properties
        let newData = { ...data };
        newData[nameInput] = value;
        setData(newData);
    }

    function onSubmit(e) {
        if (data.name.length === 0) return;

        e.preventDefault();
        props.onSubmit(e, data);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-body">
            <h4 style={{color:"black", marginBottom: 10 }}>Completa tus datos:</h4>
            <div style={{ display: "flex", marginBottom: 10 }} >
                <label htmlFor="name" style={{ width: "100px", marginRight: 4, color:"black" }}>
                    Nombre:
                </label>
                <input
                    required
                    value={data.name}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                />
            </div>

            <div style={{ display: "flex", marginBottom: 10 }} >
                <label htmlFor="email" style={{ width: "100px", marginRight: 4, color:"black" }}>
                    Email:
                </label>
                <input
                    required
                    value={data.email}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                />
            </div>

            <div style={{ display: "flex", marginBottom: 10 }} >
                <label htmlFor="phone" style={{ width: "100px", marginRight: 4, color:"black" }}>
                    Teléfono:
                </label>
                <input
                    required
                    value={data.phone}
                    name="phone"
                    type="phone"
                    onChange={onInputChange}
                />
            </div>

            <button onClick={(e) => props.onSubmit(e, data)} className='btn btn-primary'>Finalizar compra</button>
            </div>
            </div>
        </form>
    );
}