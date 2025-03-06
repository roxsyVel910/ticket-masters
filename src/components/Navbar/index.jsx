import { useState } from "react";
const Navbar = () => { 
    const { search, setSearch } = useState('');
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <h1>Mi boleteras</h1>
            <input type="text"  
            placeholder="Busca tu evento favorito" 
            onChange={handleInputChange}
            value={search}
            />
        </div>
    )
}

export default Navbar;