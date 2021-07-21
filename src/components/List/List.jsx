import "./List.scss";
import React from "react";
import Note from "../Note/Note";

function List(props){
    return (
        <div className="list">
            {
            props.arr.map((item, index) => {
                    return <Note key={ index } title={ item.title } text={ item.text } />
                })
            }
        </div>
    )
}

export default List;