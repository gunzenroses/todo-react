import React, { useState } from "react";
import "./Note.scss";

function Note(props){
    const [noteClass, setNoteClass] = useState("note");

    function closeNote(){
        setNoteClass("deleted");
    }

    console.log(props)

    return(
        <div className={ noteClass }>
            <h1 className="note__title">{props.title}</h1>
            <button className="btn_delete" onClick={ closeNote }>X</button>
            <p className="note__text">{props.text}</p>
        </div>
    )
}

export default Note;