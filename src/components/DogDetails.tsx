
import React, { useState } from 'react';

interface Props {
    name: string;
    imageUrl: string
    onBark: () => void;
}


function DogDetails(props: Props) {
    const onBark = () => {
        props.onBark();
    }
    const [count, setCount] = useState(0);
    return<div>
        <h2>{props.name}</h2>
        <img src={props.imageUrl} alt=""/>
        <button onClick={onBark}>BARK!</button>
        <button onClick={() => setCount(count + 1)}>
          {count}
        </button>
    </div>

}

export default DogDetails
