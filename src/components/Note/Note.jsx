import React from "react";
import "./Note.scss";

function Note(props){

    function deleteNote(event){
        event.preventDefault();
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h1 className="note__title">{props.title}</h1>
            <button className="btn_delete" onClick={ deleteNote }>X</button>
            <p className="note__text">{props.text}</p>
        </div>
    )
}

export default Note;