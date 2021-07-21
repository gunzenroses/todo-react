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

    return (
        <div className="form" onChange= { handleChange }>
            <input className="form_title" name="title" placeholder="Title"/>
            <textarea className="form__text" name="text" placeholder="Describe the task..."></textarea>
            <button 
                className="form__submit" 
                onClick={()=>{
                            if (note.title !== "" && note.text !== ""){
                                props.onAddition(note);
                                setNote({title: "", text: ""});
                                document.getElementsByName("title")[0].value = "";
                                document.getElementsByName("text")[0].value = "";
                            }
                    }
                }>Add to list
            </button>
        </div>
    )
}

export default Form;