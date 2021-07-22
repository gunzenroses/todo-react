import React, { useState } from "react";
import "./Form.scss";

function Form(props){
    const [note, setNote] = useState({
        title: "",
        text: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    function hadnleAddition(event){
        if (note.title !== "" && note.text !== ""){
            props.onAddition(note);
            setNote({title: "", text: ""});
        }
        event.preventDefault();
    }

    return (
        <div className="form" onChange= { handleChange }>
            <input className="form_title" value={note.title} name="title" placeholder="Title"/>
            <textarea className="form__text" value={note.text} name="text" placeholder="Describe the task..."></textarea>
            <button 
                className="form__submit" 
                onClick={ hadnleAddition }>Add to list
            </button>
        </div>
    )
}

export default Form;