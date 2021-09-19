import { useState } from "react";
import "./App.css";
import logo from './logo.svg';
import SearchBar from "./SearchBar";
import AddItem from "./Additems";
import ItemsDisplay from "./itemsDisplay";



function App(){
 const [filters, setFilters] = useState({});
 const [data, setData] = useState({items: []});

 const updateFilters = (searchParams) => {
   setFilters(searchParams);
 }

 const addItemToData = (item) =>{ 
   let items = data['items'];
   item.id = items.length;
   items.push(item);
   setData({items:items});
   console.log(data); 
 }

 return( <div className = "App">
    <img src={logo} className="App-logo" alt="logo" />
    <SearchBar updateSearchParams = {updateFilters}/>
    <AddItem addItem = {addItemToData}/>
    <ItemsDisplay items = {data["items"]} />
    {/* <p>From callback</p>
    <p>Name: {"name" in data ? data["name"] : "No data to display"}</p>
    <p>Max Price: {"price" in data ? data["price"] : "No data to display"}</p>
    <p>Type: {"type" in data ? data["type"] : "No data to display"}</p>
    <p>Brand: {"brand" in data ? data["brand"] : "No data to display"}</p>
     A13*/ } 
  </div>
  );
}

export default App;