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

    return (
        <main className="main">
            <Form onAddition={ addItem }/>
            <List arr = {items} />
        </main>
    )
}

export default Main;