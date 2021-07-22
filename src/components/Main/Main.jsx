import React, { useState } from 'react';
import "./Main.scss";
import Form from "../Form/Form";
import List from "../List/List";

function Main(){
    const [items, setItems] = useState([]);
    
    function addItem(note){
        setItems((prevValue)=>{
            return [...prevValue, note]
        })
    }

    function deleteItem(id){
        setItems((prevItems) =>{
                return prevItems.filter((item, index) => {
                    return index !== id;
            })
        })
    }

    return (
        <main className="main">
            <Form onAddition={ addItem }/>
            <List arr = {items} onDeletion={ deleteItem } />
        </main>
    )
}

export default Main;