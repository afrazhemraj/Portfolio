import React, { useState, useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
import { featuredPortfolio, 
    webPortfolio,
    gamesPortfolio,
    mechanicalPortfolio
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "games",
            title: "Coded Games",
        },
        {
            id: "website",
            title: "Website Design",
        },
        {
            id: "mechanical",
            title: "Mechanical",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "games":
                setData(gamesPortfolio);
                break;
            case "website":
                setData(webPortfolio);
                break;
            case "mechanical":
                setData(mechanicalPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item =>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected ={setSelected}
                    id={item.id}
                    />
                ))}
            </ul> 
            <div className="container">
                {data.map(d => (
                    <div className="item">  
                        <img src={d.img} alt="" />
                        <a href="#works">
                            <h3>{d.title}</h3>
                        </a>
                </div>
                ))}
            </div>
        </div>
    )
}
