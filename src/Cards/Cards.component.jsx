import React, { Component } from 'react';
import Card from './Card/Card.component.jsx';
import "./Cards.style.css"

class Cards extends Component { 
    constructor(props) { 
        super(props)
        this.state = {
            cards: [
                {
                    id: "",
                    pictures: [
                        "https://img.grouponcdn.com/deal/2BBXLF7yBXmfg1yAUSmqPWzSLd3X/2B-700x420/v1/c700x420.webp",
                        "https://img.grouponcdn.com/deal/2t6yWyaptMY7Bk1NtLzCTqSCx2rn/2t-2048x1228/v1/c700x420.webp", "https://img.grouponcdn.com/deal/2sStdo1ChKbMX3omRs9SVM9wcVbD/2s-1400x840/v1/c700x420.webp",
                        "https://img.grouponcdn.com/deal/FxrV4eD24pmKLyiu7WSNR1h92Fw/Fx-1400x840/v1/c700x420.webp",
                        "https://img.grouponcdn.com/deal/3G5VHG7HqEBMEmoXPQtJgeMrmyfu/3G-2048x1228/v1/c700x420.webp", "https://img.grouponcdn.com/deal/35XvcQUd3jQne47S7y6eFKCJ8J7r/35-800x480/v1/c700x420.webp",
                        "https://img.grouponcdn.com/deal/63KLHHZGGT8DvQXixjFR3ZhMFzc/63-700x420/v1/c700x420.webp",
                        "https://img.grouponcdn.com/deal/39LQf5bSSnFocgBegjUzARWEi9zL/39-700x420/v1/c700x420.webp",
                        "https://img.grouponcdn.com/deal/2BBXLF7yBXmfg1yAUSmqPWzSLd3X/2B-700x420/v1/c700x420.webp", 
                        "https://img.grouponcdn.com/deal/2mk4LWjDACfti7ZarTKE7oXtgF5J/2m-700x420/v1/c700x420.webp"
                    ],
                }
            ]
        }
    }


    render() { 
        return (
            <div className="CardsContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card/>
            </div>
        )
    }
}

export default Cards;