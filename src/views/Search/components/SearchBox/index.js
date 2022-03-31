import { useState } from "react";
import "./style.css";

export default function SearchBox({onSearch, onClose, searching} ) {
  const [searchText, setSearchText] = useState("");
  const handleTextSearch = (event) =>{
    setSearchText(event.target.value)
  };
  const handleCloseClickSearch= () =>{
    setSearchText("")
    onClose()
  }

  return (
 <div className="search-box">
      <h2 className="search-box-title">Buscador de personal</h2>
      <div className="search-box-buttons">
      <label>
        <input type="text" onChange={handleTextSearch} value={searchText} className="search-box-input"/>
      </label>
      <button className="search-box-input-buscar" onClick={ ()=> onSearch(searchText)} disabled={!searchText}>Buscar</button>
      {searching &&<button className="search-box-input-cerrar" onClick={ handleCloseClickSearch} disabled={!searchText}>Cerrar</button>}
      </div>
    </div>
  )
};