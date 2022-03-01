import React from 'react'

function Ingredient({ingName}) {
    return <img src={`img/${ingName}.png`} alt={ingName} />
}

export default Ingredient
