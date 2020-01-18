/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import styled from "@emotion/styled";

import Banner from "../img/Banner-2.svg";

const OuterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: relative;
    display: inline-block;
    background: ${props =>
        props.house === "Hufflepuff" &&
        `repeating-linear-gradient(
        145deg,
        black,
        black 10%,
        #e9ac2d 10%,
        yellow 15%,
        #e9ac2d 20%
    )`};
    background: ${props =>
        props.house === "Ravenclaw" &&
        `repeating-linear-gradient(145deg,#0d6585,#089ec7 4%,#089ec7 6%,#0d6585 10%,#ba9368 10%, #946b2d 15%, #735145 20%);`};
    background: ${props =>
        props.house === "Gryffindor" &&
        `repeating-linear-gradient(
            145deg, 
            #740001,
            #ae0001 5%,
            #740001 10%,
            #ae0001 10%,
            #d3a625 10%,
            #eeba30 15%,
            #d3a625 20%
        )`};
    background: ${props =>
        props.house === "Slytherin" &&
        `repeating-linear-gradient(
            145deg,
            #2a623d,
            #1a472a 10%,
            #aaaaaa 10%,
            #5d5d5d 20%
        )`};
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Title = styled.div`
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100px;
    width: 300px;
    margin: 0 auto;
    position: relative;
`;

const HouseName = styled.h1`
    text-align: center;
    position: relative;
    top: 1.85rem;
    margin: 0;
    font-size: 1.5rem;
`;

const GridContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin-top: 1.5rem;
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    background: #faebd7;
    border-radius: 12px;
    box-shadow: 0px 0px 5px 0px #a4a4a4;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 120px 150px;
    grid-gap: 15px;
    grid-template-areas: "label      desc";
`;

const Label = styled.p`
    grid-area: label;
`;

const Description = styled.p`
    grid-area: desc;
`;

const houseInfo = {
    Hufflepuff: {
        name: "Hufflepuff",
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
    Ravenclaw: {
        name: "Ravenclaw",
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
    Gryffindor: {
        name: "Gryffindor",
        crest:
            "https://vignette.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png/revision/latest/scale-to-width-down/180?cb=20111112232412",
        founder: "Godric Gryffindor",
        animal: "Lion",
        colors: "Red and gold",
        traits: "Daring, nerve, and chivalry",
        common_room: "Gryffindor Tower",
        head: "Minerva McGonagall",
        ghost: "Nearly-Headless Nick",
        famous_people: "Albus Dumbledore, Minerva McGonagall, Harry Potter"
    },
    Slytherin: {
        name: "Slytherin",
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

        yourHouse = yourHouse.charAt(0).toUpperCase() + yourHouse.slice(1);
        console.log("yourHouse: ", yourHouse);
        this.setState({ ...this.state, house: yourHouse });
    }

    render() {
        return (
            <OuterContainer house={this.state.house}>
                <InnerContainer>
                    <Title>
                        <HouseName className="house-name">
                            {this.state.house}
                        </HouseName>
                    </Title>
                    {this.state.house !== "" && (
                        <div
                            css={{
                                width: "100%",
                                display: "flex",
                                flexFlow: "column nowrap",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "1rem"
                            }}
                        >
                            <img
                                css={{
                                    margin: "0 auto"
                                }}
                                src={houseInfo[this.state.house].crest}
                                alt={`${this.state.house} crest`}
                            />
                            <GridContainer>
                                <div>
                                    <Grid>
                                        <Label>Founder: </Label>
                                        <Description>
                                            {
                                                houseInfo[this.state.house]
                                                    .founder
                                            }
                                        </Description>
                                    </Grid>
                                    <Grid>
                                        <Label>Animal: </Label>
                                        <Description>
                                            {houseInfo[this.state.house].animal}
                                        </Description>
                                    </Grid>
                                    <Grid>
                                        <Label>Colors: </Label>
                                        <Description>
                                            {houseInfo[this.state.house].colors}
                                        </Description>
                                    </Grid>
                                    <Grid>
                                        <Label>Traits: </Label>
                                        <Description>
                                            {houseInfo[this.state.house].traits}
                                        </Description>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid>
                                        <Label>Common Room: </Label>
                                        <Description>
                                            {
                                                houseInfo[this.state.house][
                                                    "common_room"
                                                ]
                                            }
                                        </Description>
                                    </Grid>
                                    <Grid>
                                        <Label>Head of House: </Label>
                                        <Description>
                                            {houseInfo[this.state.house].head}
                                        </Description>
                                    </Grid>
                                    <Grid>
                                        <Label>House Ghost: </Label>
                                        <Description>
                                            {houseInfo[this.state.house].ghost}
                                        </Description>
                                    </Grid>
                                    <Grid>
                                        <Label>Famous People: </Label>
                                        <Description>
                                            {
                                                houseInfo[this.state.house][
                                                    "famous_people"
                                                ]
                                            }
                                        </Description>
                                    </Grid>
                                </div>
                            </GridContainer>
                        </div>
                    )}
                </InnerContainer>
            </OuterContainer>
        );
    }
}

export default House;
