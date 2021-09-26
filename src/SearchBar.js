import {useState} from "react";


function SearchBar (props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () =>{
        // console.log(name);
        // console.log(price);
        // console.log(type);
        // console.log(brand);
        props.updateSearchParams ({name:name,price:price,type:type,brand:brand});
    }
    return(
        <div>
            <h2>Search For an Item</h2>
            <form>
                <lable htmlFor="name-field">Name: </lable>
                <input id="name-field" type = "text" value ={name} onChange= {(e)=>setName(e.target.value)}/> <br></br>
                <lable htmlFor="price-field">Max Price: </lable>
                <input id="price-field" type = "number" value ={price} onChange= {(e)=>setPrice(e.target.value)}/> <br></br>
                <lable htmlFor="type-field">Type: </lable>
                <input id="type-field" type = "text" value ={type} onChange= {(e)=>setType(e.target.value)}/> <br></br>
                <lable htmlFor="brand-field">Brand: </lable>
                <input id="brand-field" type = "text" value ={brand} onChange= {(e)=>setBrand(e.target.value)}/> <br></br>
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
            {/* <p>Name: {name}</p>
            <p>Max Price: {price}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p> */}
        </div>
    );
}

export default SearchBar;