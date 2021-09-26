import {useState} from "react";


function AddItem (props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = () =>{
        props.addItem ({name:name,price:price,type:type,brand:brand});
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
        //to clear values after submittion
    }
    return(
        <div>
            <h2>Add a item</h2>
            <form>
                <lable htmlFor="name-field">Name: </lable>
                <input id="name-field" type = "text" value ={name} onChange= {(e)=>setName(e.target.value)}/> <br></br>
                <lable htmlFor="price-field">Price: </lable>
                <input id="price-field" type = "number" value ={price} onChange= {(e)=>setPrice(e.target.value)}/> <br></br>
                <lable htmlFor="type-field">Type: </lable>
                <input id="type-field" type = "text" value ={type} onChange= {(e)=>setType(e.target.value)}/> <br></br>
                <lable htmlFor="brand-field">Brand: </lable>
                <input id="brand-field" type = "text" value ={brand} onChange= {(e)=>setBrand(e.target.value)}/> <br></br>
                <button type="button" onClick={addItemButtonPressed}>Add Item</button>
            </form>
        </div>
    );
}

export default AddItem;