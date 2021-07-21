import React from "react";
import "./Footer.scss"

function Footer(props){
    let year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Made by {props.name} in {year}</p>
        </footer>
    )
}

export default Footer;