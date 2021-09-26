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

 const filterData = (data) =>{
   const filteredData = [];
   
   if (!filters.name){
     return data;
   }

   // we'll first eleminate the default values, incase of empty form
   for (const item of data){
     //filters is the name of the state being saved on search button being pressed
    if ( filters.name !== "" && item.name !== filters.name){
      continue;
    }
    if ( filters.price !== 0 && item.price > filters.price){
      continue;
    }
    if ( filters.type !== "" && item.type !== filters.type){
      continue;
    }
    if ( filters.brand !== "" && item.brand !== filters.brand){
      continue;
    }
     filteredData.push(item)
   } 

   return filteredData
 }

 return( <div className = "App">
    <img src={logo} className="App-logo" alt="logo" />
    <SearchBar updateSearchParams = {updateFilters}/>
    <AddItem addItem = {addItemToData}/>

    {/* passed the array of data to be display through the filter */}
    <ItemsDisplay items = {filterData(data["items"])} />
    
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