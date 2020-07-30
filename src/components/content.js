import React from "react";

const Contant = props => {

    return (
        <div>
            {props.date &&
            <div className='wrap-img'>
                <p>Дата: {props.date}</p>
                <p>Изображение: <img src={props.url}></img> </p>
            </div>
            }
        </div>
    )
}

export default Contant;