import SearchBox from "./components/SearchBox/index";
import "./style.css"
import { useState } from "react"
import data from "../../data/userData.json"
import SearchResult from "./components/SearchResult";

export default function Search() {
const [isAtTop, setIsAtTop] = useState(false);
const [resultFilter, setResultFilter] = useState([])
const handleSearchClick = (searchText)=>{
  setIsAtTop(true)
  const searchTextLowerCase = searchText.toLowerCase()
  if(data?.length){
    const filteredData = data.filter((value) =>{
      return (value.name.toLowerCase().includes(searchTextLowerCase) || 
      value.username.toLowerCase().includes(searchTextLowerCase) ||
      value.email.toLowerCase().includes(searchTextLowerCase) ||
      value.phone.toLowerCase().includes(searchTextLowerCase) )
    });
  setResultFilter(filteredData)
  }
};
const handleCloseSearch = ()=>{
    setIsAtTop(!isAtTop)
    setResultFilter([])
};

  return  (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} searching={isAtTop}/>
      <SearchResult results={resultFilter} searching={isAtTop}/>
      </div>
   
  );
}