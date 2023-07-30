import React from "react";
import "../../app.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card__left">
        <img src={props.imageUrl} alt={props.titleimg} />
      </div>
      <div className="card__rigth">
        <div className="card__rigth__text">
          <h2>{props.title}</h2>
          <h3>{props.descripcion}</h3>
        </div>
        <div className="card__rigth___tegnologi">
          <a href="">{props.tegnologi}</a>
        </div>
        <div className="card__rigth___buttom">
          <div className="buttom__git">
            <a href="">{props.github}</a>
          </div>
          <div className="demo">
            <a href="">{props.vivo}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
