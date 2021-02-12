import React, {useEffect, useState} from "react";


function Card(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.npoint.io/476f4e001624d79d6683")
        .then((response) => response.json())
        .then((data) => {setData(data.data)});
    }, []);

    function cards(item){
        return (
            <div className="work-hero-card" key={item.id}><a href={item.url}>
            <img className="work-card-hero-img" src={item.src} alt={item.alt} />
            <h1>{item.h1}</h1>
            <div id="work-text">{item.type}</div>
            </a></div>
        );
    }

    return (
        <div className="card-container">
            {data.map(cards)}
        </div>
    );
}

export default Card;