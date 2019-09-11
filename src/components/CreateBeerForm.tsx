import React, { useState } from 'react';

function CreateBeerForm() {
    
    return <div>
        <input type="text" name="name" id="idName" />
        <select id="idType">
            <option value="ale">Ale</option>
            <option value="lager">Lager</option>
            <option value="stout">Stout</option>
            <option value="etc">Etc</option>
        </select>
        <input type="checkbox" name="hasCorn" value="hasCorn" id="hasCorn"> Has corn</input>
        <textarea name="ingredients" id="idIngredients">
            ingredients
        </textarea>
    </div>


}