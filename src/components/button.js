import React from "react";


const Button = props => (
    <form onSubmit={props.dataMethod}>
        <button>Получить изображение</button>
    </form>
)

export default Button;