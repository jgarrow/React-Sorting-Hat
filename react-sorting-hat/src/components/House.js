/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import styled from "@emotion/styled";

const OuterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    display: inline-block;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const houseInfo = {
    hufflepuff: {
        name: "hufflepuff",
        crest:
            "https://vignette.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png/revision/latest/scale-to-width-down/180?cb=20111112232427",
        founder: "Helga Hufflepuff",
        animal: "Badger",
        colors: "Yellow and black",
        traits: "Hard work, patience, loyalty and fair play",
        common_room: "Hufflepuff Basement",
        head: "Pomona Sprout",
        ghost: "Fat Friar",
        famous_people: "Newt Scamander"
    },
    ravenclaw: {
        name: "ravenclaw",
        crest:
            "https://vignette.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest/scale-to-width-down/180?cb=20140604194505",
        founder: "Rowena Ravenclaw",
        animal: "Eagle",
        colors: "Blue and bronze",
        traits: "Wit, intelligence, creativity and wisdom",
        common_room: "Ravenclaw Tower",
        head: "Filius Flitwick",
        ghost: "Grey Lady",
        famous_people: "Garrick Ollivander, Filius Flitwick, Gilderoy Lockhart"
    },
    gryffindor: {
        name: "gryffindor",
        crest:
            "https://vignette.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png/revision/latest/scale-to-width-down/180?cb=20111112232412",
        founder: "Godric Gryffindor",
        animal: "Lion",
        colors: "Red and gold",
        traits: "Daring, nerve, and chivalry",
        common_room: "Gryffindor Tower",
        head: "Minerva McGonagall",
        ghost: "Nearly-Headless Nick",
        famous_people: "Minerva McGonagall, "
    },
    slytherin: {
        name: "slytherin",
        crest:
            "https://vignette.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png/revision/latest/scale-to-width-down/180?cb=20111112232353",
        founder: "Salazar Slytherin",
        animal: "Snake",
        colors: "Green and silver",
        traits: "Cunning, resourcefulness and ambition",
        common_room: "Slytherin Dungeon",
        head: "Severus Snape",
        ghost: "Bloody Baron",
        famous_people: "Merlin, Tom Riddle, Severus Snape"
    }
};

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            house: ""
        };
    }

    getRandomIndex = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    componentDidMount() {
        let yourHouse = "";
        let tiedHouses = [];
        const houses = {
            hufflepuff: this.props.hufflepuff,
            ravenclaw: this.props.ravenclaw,
            gryffindor: this.props.gryffindor,
            slytherin: this.props.slytherin
        };

        // handles getting key ("house") with most points
        yourHouse = Object.keys(houses).reduce((a, b) =>
            houses[a] > houses[b] ? a : b
        );

        const highestHouseScore = this.props[yourHouse];

        // if there are ties, populate tiedHouses with the houses with the highest score
        Object.keys(houses).forEach(house => {
            if (this.props[house] === highestHouseScore) {
                tiedHouses.push(house);
            }
        });

        // if there was only 1 house with the highest score, that's your house
        if (tiedHouses.length === 1) {
            yourHouse = tiedHouses[0];
        } else {
            const randomIndex = this.getRandomIndex(tiedHouses.length);

            // if there was a tie, get yourHouse randomly from tiedHouses
            yourHouse = tiedHouses[randomIndex];
        }

        this.setState({ ...this.state, house: yourHouse });
    }

    render() {
        return (
            <OuterContainer>
                <InnerContainer>
                    <h1 css={{ textAlign: "center" }}>
                        Congratulations!
                        <br />
                        You are in {this.state.house}!
                    </h1>
                    {this.state.house !== "" && (
                        <div
                            css={{
                                width: "100%",
                                display: "flex",
                                flexFlow: "column nowrap",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <img
                                css={{
                                    margin: "0 auto"
                                }}
                                src={houseInfo[this.state.house].crest}
                                alt={`${this.state.house} crest`}
                            />
                            <p>
                                Founder: {houseInfo[this.state.house].founder}
                            </p>
                            <p>Animal: {houseInfo[this.state.house].animal}</p>
                            <p>Colors: {houseInfo[this.state.house].colors}</p>
                            <p>Traits: {houseInfo[this.state.house].traits}</p>
                            <p>
                                Common Room:{" "}
                                {houseInfo[this.state.house]["common_room"]}
                            </p>
                            <p>
                                Head of House:{" "}
                                {houseInfo[this.state.house].head}
                            </p>
                            <p>
                                House Ghost: {houseInfo[this.state.house].ghost}
                            </p>
                            <p>
                                Famous People:{" "}
                                {houseInfo[this.state.house]["famous_people"]}
                            </p>
                        </div>
                    )}
                </InnerContainer>
            </OuterContainer>
        );
    }
}

export default House;
